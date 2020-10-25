import { useEffect, useState } from 'react';
import JobCard from './components/JobCard';
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

  // handle params changes
  useEffect(() => {
    actions.performFetchJob(params);
  }, [params]);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>loading . . .</p>;
  }

  return (
    <div>
      {ids.map((id) => {
        const {
          company,
          company_logo,
          created_at,
          title,
          type,
          location,
        } = list[id];
        return (
          <JobCard
            key={id}
            id={id}
            company={company}
            company_logo={company_logo}
            created_at={created_at}
            location={location}
            title={title}
            type={type}
          />
        );
      })}
    </div>
  );
};

export default Jobs;
