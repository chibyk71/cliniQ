import type { Handle } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';

/**
 * Handle to validate session token from cookies and set it in the local context
 *
 * If the session token is valid, the user and session are set in the local context,
 * and the session token is renewed if it's about to expire. If the session token
 * is invalid, the session token is cleared from the cookies.
 *
 * @param {import('@sveltejs/kit').RequestEvent} event
 * @param {import('@sveltejs/kit').Resolve} resolve
 * @returns {Promise<import('@sveltejs/kit').RequestEvent>}
 */
const handleAuth: Handle = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await auth.validateSessionToken(sessionToken);

	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	} else {
		auth.deleteSessionTokenCookie(event);
	}

	event.locals.user = user;
	event.locals.session = session;
	return resolve(event);
};

export const handle: Handle = handleAuth;
