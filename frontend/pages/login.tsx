import React from 'react';
import Layout from '../components/Layout';
import LoginComponent from '../components/auth/LoginComponent';

const Login = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Log in</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <LoginComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
