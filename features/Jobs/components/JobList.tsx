import { idsType, listType } from '../../../types/Job.types';
import JobCard from './JobCard';

type propTypes = {
  error: Error['message'];
  ids?: idsType;
  list?: listType;
  loading: boolean;
};

const JobList: React.FC<propTypes> = ({
  error = undefined,
  ids,
  list,
  loading = false,
}) => {
  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>Loading contents . . . </div>;
  }

  if (ids) {
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
  }

  return <div>Empty job list</div>;
};

export default JobList;
