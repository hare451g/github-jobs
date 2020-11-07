import { useContext, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

import ErrorMessage from '../../../components/ErrorMessage';

import { JobFeatureContext } from '../useJobFeature';

import JobCard from './JobCard';

const JobList: React.FC = () => {
  const { state, actions } = useContext(JobFeatureContext);
  const { error, isLoading, ids, list, filter, page, isEndOfPage } = state;

  const handleOnEnterWaypoint = () => {
    if (!isLoading && !isEndOfPage) {
      actions.handleNextPage();
    }
  };

  useEffect(() => {
    actions.handleFetchJobs(filter, page);
  }, [filter, page]);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (ids && ids.length > 0) {
    const cards = ids.map((id) => list[id]);

    return (
      <div>
        {cards.map(
          (
            { company, company_logo, created_at, id, location, title, type },
            index
          ) => (
            <JobCard
              key={`job-${index + 1}-${id}`}
              id={id}
              company={company}
              company_logo={company_logo}
              created_at={created_at}
              location={location}
              title={title}
              type={type}
            />
          )
        )}
        {isLoading &&
          [...Array(10)].map((_, idx) => (
            <JobCard isLoading={isLoading} key={`joblist-loader-${idx + 1}`} />
          ))}
        <Waypoint onEnter={handleOnEnterWaypoint}>
          <div>
            <p>{isLoading ? 'Loading more jobs . . .' : 'End of job list'}</p>
          </div>
        </Waypoint>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        {[...Array(10)].map((_, idx) => (
          <JobCard isLoading={isLoading} key={`joblist-loader-${idx + 1}`} />
        ))}
      </div>
    );
  }

  return <div>No job found</div>;
};

export default JobList;
