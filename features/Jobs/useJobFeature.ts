import { useState, createContext, Context } from 'react';
import jobsAPI from '../../api/jobsAPI';
import {
  Job,
  jobIdsType,
  jobListFilters,
  jobListType,
} from '../../types/Job.types';

// types definitions
type jobState = {
  isLoading: boolean;
  error: Error['message'];
  ids: jobIdsType;
  list: jobListType;
  selected: Job['id'];
  filter: jobListFilters;
};

type handleFetchJobsType = (filters: jobListFilters) => Promise<void>;

type jobFeatureContextType = {
  state: jobState;
  actions: {
    handleFetchJobs?: handleFetchJobsType;
    handleFulltimeChange?: () => void;
    handleLocationChange?: (keyword: jobListFilters['location']) => void;
    handleSubmitSearch?: (keyword: jobListFilters['description']) => void;
  };
};

// initial states
const initialState: jobState = {
  isLoading: false,
  error: null,
  ids: [],
  list: {},
  selected: null,
  filter: {
    description: 'python',
    location: 'us',
    lat: undefined,
    long: undefined,
    fullTime: false,
  },
};

// context
export const JobFeatureContext: Context<jobFeatureContextType> = createContext({
  state: initialState,
  actions: {},
});

// hooks definition
function useJobFeature(): jobFeatureContextType {
  const [state, setState] = useState<jobState>(initialState);

  const setLoading = (isLoading: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isLoading,
    }));
  };

  const setFilters = (key: string, value: any) =>
    setState((prev) => ({
      ...prev,
      filter: {
        ...prev.filter,
        [key]: value,
      },
    }));

  // actions - filter
  const handleSubmitSearch = (keyword: string) => {
    setFilters('description', keyword);
  };

  const handleFulltimeChange = () => {
    setFilters('fulltime', !state.filter.fullTime);
  };

  const handleLocationChange = (keyword: string) => {
    setFilters('location', keyword);
  };

  // async
  const handleFetchJobs: handleFetchJobsType = async (filters) => {
    try {
      setLoading(true);

      const { error, ids, list } = await jobsAPI.fetchJobList(filters);

      if (error) {
        throw new Error(error);
      }

      setState((prevState) => ({
        ...prevState,
        error: null,
        ids,
        list,
      }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, error: error.message }));
    } finally {
      setLoading(false);
    }
  };

  return {
    state,
    actions: {
      handleFetchJobs,
      handleSubmitSearch,
      handleFulltimeChange,
      handleLocationChange,
    },
  };
}

export default useJobFeature;
