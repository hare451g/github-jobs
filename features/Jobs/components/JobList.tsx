import { useContext, useEffect } from 'react';

import ErrorMessage from '../../../components/ErrorMessage';

import { JobFeatureContext } from '../useJobFeature';

import JobCard from './JobCard';

const JobList: React.FC = () => {
  const { state, actions } = useContext(JobFeatureContext);
  const { error, isLoading, ids, list, filter } = state;

  useEffect(() => {
    actions.handleFetchJobs(filter);
  }, [filter]);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading) {
    return <div>Loading contents . . . </div>;
  }

  if (ids && ids.length > 0) {
    const cards = ids
      .map((id) => list[id])
      .map(
        ({ company, company_logo, created_at, id, location, title, type }) => (
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
        )
      );

    return <div>{cards}</div>;
  }

  return <div>Empty job list</div>;
};

export default JobList;
