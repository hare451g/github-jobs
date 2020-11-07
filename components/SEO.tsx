import Head from 'next/head';
import { FC } from 'react';
import meta from '../public/json/meta.json';

type propTypes = {
  title: string;
};

const SEO: FC<propTypes> = ({ title }) => (
  <Head>
    <title>{`Github Jobs - ${title}`}</title>
    {Object.keys(meta).map((key) => (
      <meta name={key} content={meta[key]} key={key} />
    ))}
  </Head>
);

export default SEO;
