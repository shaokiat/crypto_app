import React from 'react';
import Cryptocurrencies from '../components/Cryptocurrencies';
import Layout from '../components/Layout';

const CryptocurrenciesPage = () => {
  return (
    <Layout>
      <Cryptocurrencies simplified={false} />
    </Layout>
  );
};

export default CryptocurrenciesPage;
