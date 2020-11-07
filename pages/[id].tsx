import { useRouter } from 'next/router';

import SEO from '../components/SEO';
import Details from '../features/Details';

function JobByID() {
  const { query } = useRouter();
  const title = 'Job Details';

  return (
    <>
      <SEO title={title} />
      <Details id={query.id} />
    </>
  );
}

export default JobByID;
