import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Signin = () => {
  return (
    <Layout>
      <h2>Sign In Page</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default Signin;
