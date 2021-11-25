import React, { useState } from 'react';
import { signup } from '../../actions/auth';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  // Destructure for easier reference
  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: '' });
    const newUser = { name, email, password };

    signup(newUser).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: '',
          email: '',
          password: '',
          error: '',
          loading: false,
          message: data.message,
          showForm: false,
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

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleChange('name')}
            value={name}
            type="text"
            className="form-control"
            placeholder="Type your name"
          />
        </div>
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
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      {showForm && signupForm()}
    </React.Fragment>
  );
};

export default SignupComponent;
