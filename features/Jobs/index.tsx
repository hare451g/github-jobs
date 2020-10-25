import { useEffect, useState } from 'react';
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
      <ul>
        <li>
          {ids.map((id) => {
            const {
              company,
              company_logo,
              company_url,
              created_at,
              description,
              title,
              type,
              location,
            } = list[id];
            return (
              <li key={id}>
                <img src={company_logo} width={90} />
                <a href={company_url}>{company}</a>
                <p>{title}</p>
                <p>{type}</p>
                <p>{created_at}</p>
                <p>{location}</p>
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Jobs;
