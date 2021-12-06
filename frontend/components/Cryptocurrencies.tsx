import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import millify from 'millify';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../pages/api/cryptoApi';

import { CryptoType, iSimplified } from '../store/types';

const Cryptocurrencies = ({ simplified }: iSimplified) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<CryptoType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((coin: CryptoType) =>
      coin.name.toLowerCase().includes(searchTerm),
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <>Loading...</>;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency: CryptoType) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link key={currency.id} href={`/crypto/${currency.id}`} passHref>
              <a>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<Image alt={currency.name} width={35} height={35} src={currency.iconUrl} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
