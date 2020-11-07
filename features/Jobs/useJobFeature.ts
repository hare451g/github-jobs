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
  page: number;
  isEndOfPage: boolean;
  filter: jobListFilters;
};

type handleFetchJobsType = (
  filters: jobListFilters,
  page: number
) => Promise<void>;

type jobFeatureContextType = {
  state: jobState;
  actions: {
    handleFetchJobs?: handleFetchJobsType;
    handleFulltimeChange?: () => void;
    handleLocationChange?: (keyword: jobListFilters['location']) => void;
    handleSubmitSearch?: (keyword: jobListFilters['description']) => void;
    handleNextPage?: () => void;
  };
};

// initial states
const initialState: jobState = {
  isLoading: false,
  error: null,
  ids: [],
  list: {},
  selected: null,
  page: 0,
  isEndOfPage: false,
  filter: {
    description: undefined,
    location: undefined,
    lat: undefined,
    long: undefined,
    fullTime: undefined,
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
      ids: [],
      list: {},
      page: 0,
      isEndOfPage: false,
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

  const handleNextPage = () => {
    if (!state.isEndOfPage) {
      setState((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  };

  // async
  const handleFetchJobs: handleFetchJobsType = async (filters, page) => {
    try {
      setLoading(true);

      const { error, ids, list } = await jobsAPI.fetchJobList(filters, page);

      if (error) {
        throw new Error(error);
      }

      if (ids.length > 1) {
        setState((prevState) => ({
          ...prevState,
          error: null,
          ids: [...prevState.ids, ...ids],
          list: { ...prevState.list, ...list },
          isEndOfPage: false,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          error: null,
          isEndOfPage: true,
        }));
      }
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
      handleNextPage,
    },
  };
}

export default useJobFeature;
