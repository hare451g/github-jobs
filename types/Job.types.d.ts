type Job = {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
};

type jobListFilters = {
  description?: string;
  location?: string;
  lat?: string;
  long?: string;
  fullTime?: boolean;
};

type jobListType = { [key: string]: Job };
type jobIdsType = Array<Job['id']>;

type jobStateTypes = {
  loading: boolean;
  error?: Error['message'];
  list: jobListType;
  ids: jobIdsType;
};

export {
  Job,
  jobStateTypes,
  requestParams,
  jobListFilters,
  jobListType,
  jobIdsType,
};
