import { useEffect, useState } from 'react';

import DescriptionFilter from './components/DescriptionFilter';
import FulltimeFilter from './components/FulltimeFilter';
import JobList from './components/JobList';
import useJobApi from './hooks/useJobApi';

type propTypes = {};

const Jobs: React.FC<propTypes> = () => {
  // api
  const { state, actions } = useJobApi();
  const { error, ids, list, loading } = state;

  // params
  const [params, setParams] = useState({
    description: 'python',
    location: 'us',
    lat: undefined,
    long: undefined,
    fullTime: false,
  });

  // handle descriptions changes
  const handleSubmitSearch = (keyword: string) => {
    setParams((prev) => ({
      ...prev,
      description: keyword,
    }));
  };

  // handle fulltime change
  const handleFulltimeChange = (fullTime: boolean) => {
    setParams((prev) => ({
      ...prev,
      fullTime,
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
        loading={loading}
      />

      <FulltimeFilter
        initialValue={params.fullTime}
        onFulltimeChange={handleFulltimeChange}
      />

      <JobList error={error} ids={ids} list={list} loading={loading} />
    </div>
  );
};

export default Jobs;
