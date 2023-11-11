import React from 'react';
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
      <p>Hello, World! From Next.js!</p>
    </Layout>
  );
}

export default Home;
