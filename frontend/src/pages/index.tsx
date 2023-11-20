/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Layout from '@components/Layout';

function Home() {
  return (
    <Layout>
      <Head>
        <title>AC Software</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>AC Software</h1>
      <p>
        Hello, World! From Next.js! Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <div
        sx={{
          height: '1000px',
        }}
      />
    </Layout>
  );
}

export default Home;
