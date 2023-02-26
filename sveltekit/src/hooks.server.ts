import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	session: {
		strategy: 'jwt'
	},

	callbacks: {
		session({ session, token }) {
			if (session.user) {
				session.user.id = token.sub as string;
				session.user.username = token.name?.replace(/\s+/g, '').toLocaleLowerCase() as string;
			}
			return session;
		}
	},

	providers: [
		Google({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		})
	]
});
