import type { NextPage } from 'next';
import Link from 'next/link';
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';

import Layout from '../components/Layout';
import { useGetCryptosQuery } from './api/cryptoApi';
import Cryptocurrencies from '../components/Cryptocurrencies';
import News from '../components/News';

const { Title } = Typography;

const Home: NextPage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="home-title">
          <Link href="/cryptocurrencies">
            <a>Show More</a>
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="home-title">
          <Link href="/news">
            <a>Show More</a>
          </Link>
        </Title>
      </div>
      <News simplified />
    </Layout>
  );
};

export default Home;
