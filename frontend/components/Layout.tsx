import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Layout;
