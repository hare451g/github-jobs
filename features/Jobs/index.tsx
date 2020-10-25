import { useEffect, useState } from 'react';

import DescriptionFilter from './components/DescriptionFilter';
import FulltimeFilter from './components/FulltimeFilter';
import JobList from './components/JobList';
import LocationFilter from './components/LocationFilter';
import useJobApi from './hooks/useJobApi';

import styles from './index.module.css';

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
  const handleFulltimeChange = () => {
    setParams((prev) => ({ ...prev, fullTime: !prev.fullTime || undefined }));
  };

  // handle location change
  const handleLocationChange = (keyword: string) => {
    setParams((prev) => ({
      ...prev,
      location: keyword,
    }));
  };

  // handle params changes
  useEffect(() => {
    actions.performFetchJob(params);
  }, [params]);

  return (
    <div>
      <section className={styles.descriptionFilterSection}>
        <DescriptionFilter
          initialValue={params.description}
          submitSearch={handleSubmitSearch}
          loading={loading}
        />
      </section>
      <section className={styles.fulltimeFilterSection}>
        <FulltimeFilter
          isFulltime={params.fullTime}
          onFulltimeChange={handleFulltimeChange}
        />
      </section>
      <section className={styles.locationFilterSection}>
        <LocationFilter
          initialValue={params.location}
          onSubmit={handleLocationChange}
        />
      </section>
      <section className={styles.jobSection}>
        <JobList error={error} ids={ids} list={list} loading={loading} />
      </section>
    </div>
  );
};

export default Jobs;
