import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';

const Signup = () => {
  return (
    <Layout>
      <h2>Sign up Page</h2>
      <SignupComponent />
    </Layout>
  );
};

export default Signup;
