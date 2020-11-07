import { useEffect } from 'react';

import ApplyGuide from './components/ApplyGuide';
import useJobDetails, { JobDetailsContext } from './useJobDetails';

function Details({ id }) {
  const jobDetailsFeature = useJobDetails();

  useEffect(() => {
    jobDetailsFeature.actions.fetchJobDetails(id);
  }, [id]);

  return (
    <JobDetailsContext.Provider value={jobDetailsFeature}>
      <h1>Github Jobs</h1>
      <ApplyGuide />
    </JobDetailsContext.Provider>
  );
}

export default Details;
