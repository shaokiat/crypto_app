import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <p>footer</p>
    </React.Fragment>
  );
};

export default Layout;
