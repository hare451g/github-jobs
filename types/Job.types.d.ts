interface Job {
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
}

type requestParams = {
  description?: string;
  location?: string;
  lat?: string;
  long?: string;
  fullTime?: boolean;
};

type jobStateTypes = {
  loading: boolean;
  error?: Error['message'];
  list: listType;
  ids: idsType;
};

type fetchPositionsType = (params: requestParams) => Promise<void>;
type listType = { [key: string]: Job };
type idsType = Array<Job['id']>;

export {
  Job,
  jobStateTypes,
  requestParams,
  fetchPositionsType,
  listType,
  idsType,
};
