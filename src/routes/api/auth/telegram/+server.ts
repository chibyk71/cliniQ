import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';
import { verifyTelegramInitData } from '$lib/server/telegram';
import { eq } from 'drizzle-orm';
import type { RequestHandler, RequestEvent } from './$types';
import { json } from "@sveltejs/kit"
import { generateSessionToken , createSession, setSessionTokenCookie } from '$lib/server/auth';

export const POST: RequestHandler = (async (event: RequestEvent) => {
    try {
        const body = await event.request.json();
        const initData = body.initData;
        const botToken = process.env.TELEGRAM_BOT_TOKEN!;

        if (!initData || !botToken) {
            return json({ error: 'Missing initData or botToken' }, { status: 400 });
        }

        // Verify Telegram initData
        const valid = verifyTelegramInitData(initData, botToken);
        if (!valid) {
            return json({ error: 'Invalid Telegram signature' }, { status: 401 });
        }

        // exract user info from initData
        const params = new URLSearchParams(initData);
        const telegramId = params.get('id');
        const username = params.get('username');
        const firstName = params.get('first_name');
        const lastName = params.get('last_name');
        const photoUrl = params.get('photo_url');

        if (!telegramId) {
            return json({ error: 'Missing Telegram ID' }, { status: 400 });
        }

        // Here you would typically look up the user in your database and create a session
        // Find or create user
        let [users] = await db.select().from(user).where(eq(user.providerUserId, telegramId));

        if (!users) {
            const newUser = {
                id: crypto.randomUUID(),
                provider: 'telegram',
                providerUserId: telegramId,
                username: username || `tg_${telegramId}`,
                firstName,
                lastName,
                photoUrl,
                passwordHash: null,
                age: null,
                createdAt: new Date()
            };
            await db.insert(user).values(newUser);
            users = newUser;
        }
        // Create session
        const token = generateSessionToken();
        const session = await createSession(token, users.id);

        // Set session cookie
        setSessionTokenCookie(event, token, session.expiresAt);

        return json({ success: true, user: users });
    } catch (err) {
        console.error(err);
        return json({ error: 'Server error' }, { status: 500 });
    }

});