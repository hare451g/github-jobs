import { useContext, useEffect } from 'react';
import JobContext from '../../api/JobContext';
import ApplyGuide from './components/ApplyGuide';

function Details({ id }) {
  const { actions, state } = useContext(JobContext);
  const { loading, error, selectedJob } = state;

  useEffect(() => {
    actions.fetchJobById(id);
  }, []);

  if (loading) {
    return <div>loading contents ... </div>;
  }

  if (error) {
    return <div>error occurred {error} </div>;
  }

  if (selectedJob) {
    const { how_to_apply: howToApply } = selectedJob;
    return (
      <div>
        <ApplyGuide howToApply={howToApply} />
      </div>
    );
  }

  return <div>path: {id} </div>;
}

export default Details;
