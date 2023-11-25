/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Layout from '@components/Layout';
import Landing from '@components/Landing';

function Home() {
  return (
    <Layout>
      <Head>
        <title>AC Software</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
      <div
        sx={{
          height: '1000px',
        }}
      />
    </Layout>
  );
}

export default Home;
