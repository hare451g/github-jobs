import Jobs from '../features/Jobs';

import Head from 'next/head';

function HomePage() {
  const title = 'Github Jobs - find your next job';
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Github Jobs</h1>
      <Jobs />
    </>
  );
}

export default HomePage;
