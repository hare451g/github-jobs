import { useRouter } from 'next/router';

import Details from '../features/Details';

function JobByID() {
  const { query } = useRouter();
  return <Details id={query.id} />;
}

export default JobByID;
