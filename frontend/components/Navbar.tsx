import React, { useEffect, useState } from 'react';
// import Router from 'next/router';
import Link from 'next/link';
import { APP_NAME } from '../config';
// import { signout, isAuth } from '../actions/auth';
import { Button, Menu, Typography, Avatar } from 'antd';
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
  WalletOutlined,
} from '@ant-design/icons';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState<number>(0);

  // handle resize
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // set active menu
  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const closeMobileMenu = () => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src="/cryptocurrency.png" size="large" />
        <Typography.Title level={2} className="logo">
          <Link href="/">
            <a>{APP_NAME}</a>
          </Link>
        </Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" onBlur={() => closeMobileMenu()}>
          {/* {!isAuth() && (
            <Menu.Item>
              <Link href="/login" passHref>
                <a onClick={() => closeMobileMenu()}>Log In</a>
              </Link>
            </Menu.Item>
          )}
          {!isAuth() && (
            <Menu.Item>
              <Link href="/signup" passHref>
                <a onClick={() => closeMobileMenu()}>Sign up</a>
              </Link>
            </Menu.Item>
          )}
          {isAuth() && (
            <Menu.Item>
              <Link href="/signout" passHref>
                <a style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Sign Out
                </a>
              </Link>
            </Menu.Item>
          )} */}
          <Menu.Item icon={<HomeOutlined />}>
            <Link href="/">
              <a onClick={() => closeMobileMenu()}>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<WalletOutlined />}>
            <Link href="/wallet">
              <a onClick={() => closeMobileMenu()}>My Wallet</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link href="/cryptocurrencies" passHref>
              <a onClick={() => closeMobileMenu()}>Cryptocurrencies</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link href="/exchanges" passHref>
              <a onClick={() => closeMobileMenu()}>Exchanges</a>
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link href="/news" passHref>
              <a onClick={() => closeMobileMenu()}>News</a>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
