import Head from 'next/head';
import { useRouter } from 'next/router';

import Details from '../features/Details';

function JobByID() {
  const { query } = useRouter();
  const title = 'Github Jobs - find your next job';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Details id={query.id} />
    </>
  );
}

export default JobByID;
