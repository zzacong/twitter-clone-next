import { signIn, signOut, useSession } from 'next-auth/react';

import { trpc } from '$lib/trpc';

const AuthShowcase: React.FC = () => {
  const { data: session } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: session?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {session && <span>Logged in as {session.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => signOut() : () => signIn()}
      >
        {session ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  );
};

export default AuthShowcase;
