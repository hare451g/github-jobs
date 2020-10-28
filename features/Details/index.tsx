import { useEffect } from 'react';
import useJobApi from '../../hooks/useJobApi';

function Details({ id }) {
  const { actions, state } = useJobApi();
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
    return <div>{JSON.stringify(selectedJob)}</div>;
  }

  return <div>path: {id} </div>;
}

export default Details;
