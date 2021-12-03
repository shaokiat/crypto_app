import type { NextPage } from 'next';
import Link from 'next/link';
import { Typography, Row, Col, Statistic } from 'antd';

import Layout from '../components/Layout';

const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <Layout>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
