import ErrorMessage from '../../../components/ErrorMessage';
import { jobListType, jobIdsType } from '../../../types/Job.types';
import JobCard from './JobCard';

type propTypes = {
  error: Error['message'];
  ids?: jobIdsType;
  list?: jobListType;
  loading: boolean;
};

const JobList: React.FC<propTypes> = ({
  error = undefined,
  ids,
  list,
  loading = false,
}) => {
  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <div>Loading contents . . . </div>;
  }

  if (ids && ids.length > 0) {
    const jobs = ids.map((id) => list[id]);
    const cards = jobs.map(
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
