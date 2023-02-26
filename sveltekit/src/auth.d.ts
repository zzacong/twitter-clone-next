import { type DefaultSession } from '@auth/core/types';

declare module '@auth/core' {
	interface Session extends DefaultSession {
		user: {
			id: string;
			username: string;
		} & DefaultSession['user'];
	}
}
