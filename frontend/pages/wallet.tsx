import React from 'react';
import dynamic from 'next/dynamic';

const Wallet = dynamic(() => import('../components/Wallet'), { ssr: false });

const WalletPage = () => {
  return <Wallet />;
};

export default WalletPage;
