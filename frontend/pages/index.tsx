import type { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <h2>Home Page</h2>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </Layout>
  );
};

export default Home;
