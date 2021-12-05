import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../pages/api/cryptoNewsApi';
import { useGetCryptosQuery } from '../pages/api/cryptoApi';
import { CryptoType, iSimplified, iNews } from '../store/types';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }: iSimplified) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified ? 6 : 12 });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) {
    return <>Loading...</>;
  }

  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value: string) => setNewsCategory(value)}
              filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((currency: CryptoType) => (
                <Option key={currency.id} value={currency.name}>
                  {currency.name}
                </Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews.value.map((news: iNews, i: number) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <Link href={news.url}>
                <a target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                    <Title className="news-title" level={4}>
                      {news.name}
                    </Title>
                    <Image
                      alt={news.name}
                      width={100}
                      height={100}
                      src={news?.image?.thumbnail?.contentUrl || demoImage}
                    />
                  </div>
                  <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                  <div className="provider-container">
                    <div>
                      <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
                      <Text className="provider-name">{news.provider[0]?.name}</Text>
                    </div>
                    <Text>{moment(news.datePublished).fromNow()}</Text>
                  </div>
                </a>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
