import { useEffect } from 'react';

import JobArticle from './components/JobArticle';
import useJobDetails, { JobDetailsContext } from './useJobDetails';

function Details({ id }) {
  const jobDetailsFeature = useJobDetails();

  useEffect(() => {
    jobDetailsFeature.actions.fetchJobDetails(id);
  }, [id]);

  return (
    <JobDetailsContext.Provider value={jobDetailsFeature}>
      <h1>Github Jobs</h1>
      <JobArticle />
    </JobDetailsContext.Provider>
  );
}

export default Details;
