import type { NextPage } from 'next';
import Head from 'next/head';

import Sidebar from '~/components/Sidebar';
import Feed from '~/components/Feed';
import Widgets from '~/components/Widgets';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid max-h-screen flex-1 grid-cols-12 gap-x-6 overflow-hidden px-4 lg:mx-auto lg:max-w-6xl">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const tweets = await getTweets();

//   return {
//     props: {
//       tweets,
//     },
//   };
// };
