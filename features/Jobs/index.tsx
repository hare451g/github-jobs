import { useEffect, useState } from 'react';

import DescriptionFilter from './components/DescriptionFilter';
import JobList from './components/JobList';
import useJobApi from './hooks/useJobApi';

type propTypes = {};

const Jobs: React.FC<propTypes> = () => {
  // api
  const { state, actions } = useJobApi();
  const { error, ids, list, loading } = state;

  // params
  const [params, setParams] = useState({
    description: 'javascript',
    location: 'united states',
    lat: undefined,
    long: undefined,
    fullTime: undefined,
  });

  // handle descriptions changes
  const handleSubmitSearch = (keyword: string) => {
    setParams((prev) => ({
      ...prev,
      description: keyword,
    }));
  };

  // handle params changes
  useEffect(() => {
    actions.performFetchJob(params);
  }, [params]);

  return (
    <div>
      <DescriptionFilter
        initialValue={params.description}
        submitSearch={handleSubmitSearch}
      />
      <JobList error={error} ids={ids} list={list} loading={loading} />
    </div>
  );
};

export default Jobs;
