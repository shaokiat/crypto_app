import React from 'react';
import Cryptocurrencies from '../components/Cryptocurrencies';
import Layout from '../components/Layout';

const CryptocurrenciesPage = () => {
  return (
    <>
      <Cryptocurrencies simplified={false} />
    </>
  );
};

export default CryptocurrenciesPage;
