import { hash, verify } from '@node-rs/argon2';
import { encodeBase32LowerCase } from '@oslojs/encoding';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as auth from '$lib/server/auth';
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import z from 'zod';

const LoginUser = z.object({
	username: z.string().min(3).max(31),
	password: z.string().min(6).max(255)
})

export const load = (async () => {
	const form = await superValidate(zod(LoginUser));
	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {

	default: async (event) => {
		const form = await superValidate(event.request, zod(LoginUser))

		const { username, password } = form.data;

		if (!form.valid) {
			return fail(400, { message: 'Invalid username or password', form });
		}
	
		const results = await db.select().from(table.user).where(eq(table.user.username, username));

		const existingUser = results.at(0);
		if (!existingUser) {
			return fail(400, { message: 'Incorrect username or password' });
		}

		if (!existingUser.passwordHash) {
			return fail(400, { message: 'User does not have a password set' });
		}

		const validPassword = await verify(existingUser.passwordHash, password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		if (!validPassword) {
			return fail(400, { message: 'Incorrect username or password' });
		}

		const sessionToken = auth.generateSessionToken();
		const session = await auth.createSession(sessionToken, existingUser.id);
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);

		return redirect(302, '/home');
	}
};
