import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import z from 'zod';
import { hash } from '@node-rs/argon2';
import { user } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { createSession, generateSessionToken, setSessionTokenCookie } from '$lib/server/auth';

const User = z.object({
	providerUserId: z.string().email(),
	username: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	password: z.string(),
	gender: z.enum(['male', 'female']).default('male')
})

export const load = (async () => {
	const form = await superValidate(zod(User));
    return { form, title:"Sign Up"};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
		
		const form = await superValidate(event.request, zod(User))

		if (!form.valid) {
			return fail(400, { message: '', form });
		}

		const { username, password, firstName, lastName, gender, providerUserId } = form.data

		const userId = crypto.randomUUID();
		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		try {
			await db.insert(user).values({ id: userId, provider: 'email', providerUserId, username, passwordHash, firstName, lastName: lastName ? String(lastName) : null, gender });

			const sessionToken = generateSessionToken();
			const session = await createSession(sessionToken, userId);
			setSessionTokenCookie(event, sessionToken, session.expiresAt);
		} catch {
			return fail(500, { message: 'An error has occurred' });
		}
		return redirect(302, '/home');
    }
};