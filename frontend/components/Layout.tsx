import { Typography, Space } from 'antd';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">{children}</div>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Copyright © 2021
            <Link href="/">
              <a>Cryptoverse Inc.</a>
            </Link>
            <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/exchanges">
              <a>Exchanges</a>
            </Link>
            <Link href="/news">
              <a>News</a>
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Layout;
