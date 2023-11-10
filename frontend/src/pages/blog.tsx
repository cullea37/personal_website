import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog | AC Software</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      Hello, World! From the Blog!
    </Layout>
  );
}

export default Blog;
