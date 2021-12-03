import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { signin, authenticate, isAuth } from '../../actions/auth';

const LoginComponent = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  // Redirect to home if signed in
  useEffect(() => {
    isAuth() && router.push(`/`);
  }, []);

  // Destructure for easier reference
  const { email, password, error, loading, message, showForm } = values;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: '' });
    const signInUser = { email, password };

    signin(signInUser).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // save user token to cookie

        // save user info to localstorage

        // authenticate user
        authenticate(data, () => {
          // redirect to page
          router.push(`/`);
        });
      }
    });
  };

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, error: '', [name]: e.target.value });
  };

  const showLoading = () => loading && <div className="alert alert-info">Loading...</div>;
  const showError = () => error && <div className="alert alert-danger">{error}</div>;
  const showMessage = () => message && <div className="alert alert-info">{message}</div>;

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange('email')}
            value={email}
            type="email"
            className="form-control"
            placeholder="Type your email"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange('password')}
            value={password}
            type="password"
            className="form-control"
            placeholder="Type your password"
          />
        </div>

        <div>
          <button className="btn btn-primary">Log In</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signinForm()}
    </React.Fragment>
  );
};

export default LoginComponent;
