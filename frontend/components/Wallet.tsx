import React, { useState } from 'react';
import Image from 'next/image';

import { ethers } from 'ethers';
import styles from './Wallet.module.css';
import { MetaMaskInpageProvider } from '@metamask/providers';
import { Button } from 'antd';

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

const { ethereum } = window;

const Wallet = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [defaultAccount, setDefaultAccount] = useState('');
  const [userBalance, setUserBalance] = useState('');
  const [connButtonText, setConnButtonText] = useState('Connect to MetaMask');

  const connectWalletHandler = () => {
    // const provider = await detectEthereumProvider();
    if (typeof ethereum !== 'undefined') {
      console.log('MetaMask is available!');

      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          if (result !== undefined) {
            accountChangedHandler(result![0]);
            setConnButtonText('Wallet Connected');
            getAccountBalance(result![0]);
          }
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage('Add MetaMask extension to your browser!');
    }
  };

  const accountChangedHandler = (newAccount: string) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account: string) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then((balance) => {
      setUserBalance(ethers.utils.formatEther(balance));
    });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  return (
    <>
      <div className={styles.metamaskImageContainer}>
        <Image alt="metamask" width={200} height={200} src="/metamask.png" />
        <Button type="primary" size="large" className={styles.connectButton} onClick={connectWalletHandler}>
          {connButtonText}
        </Button>
      </div>

      <div className="accountDisplay">
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className="balanceDisplay">
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage}
    </>
  );
};

export default Wallet;
