import cookie from 'js-cookie';
import fetch from 'isomorphic-fetch';
import { API } from '../config';

interface User {
  name?: string;
  email: string;
  password: string;
}

type CallbackFunction = () => void;

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

export const signout = (next: CallbackFunction) => {
  removeCookie('token');
  removeLocalStorage('user');
  next();

  return fetch(`${API}/signout`, {
    method: 'GET',
  })
    .then((response) => {
      console.log('signout success');
    })
    .catch((err) => console.log(err));
};

// set cookie
export const setCookie = (key: string, value: string) => {
  // Client-side
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key: string) => {
  // Client-side
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// get cookie
export const getCookie = (key: string) => {
  if (process.browser) {
    return cookie.get(key);
  }
};

// localstorage
export const setLocalStorage = (key: string, value: string) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};

// authenticate user by pass data to cookie and local storage
export const authenticate = (data: any, next: CallbackFunction) => {
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      const jsonUser = localStorage.getItem('user');
      if (jsonUser) {
        return JSON.parse(jsonUser);
      } else {
        return false;
      }
    }
  }
};
