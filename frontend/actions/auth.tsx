import fetch from 'isomorphic-fetch';
import { API } from '../config';

interface User {
  name?: string;
  email: string;
  password: string;
}

export const signup = (user: User) => {
  console.log(`${API}/signup`);
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error: Error) => console.log(error));
};

export const signin = (user: User) => {
  console.log(`${API}/signin`);
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error: Error) => console.log(error));
};
