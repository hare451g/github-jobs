import { Context, createContext, useState } from 'react';
import jobsAPI from '../../api/jobsAPI';
import { Job } from '../../types/Job.types';

type jobDetailsState = {
  isLoading: boolean;
  error: Error['message'];
  data: Job;
};

type useJobDetailsType = {
  state: jobDetailsState;
  actions: {
    fetchJobDetails?: (id: Job['id']) => Promise<void>;
  };
};

const initialState: jobDetailsState = {
  isLoading: false,
  error: null,
  data: undefined,
};

export const JobDetailsContext: Context<useJobDetailsType> = createContext({
  state: initialState,
  actions: {},
});

function useJobDetails(): useJobDetailsType {
  const [state, setState] = useState<jobDetailsState>(initialState);

  const setLoading = (isLoading: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isLoading,
    }));
  };

  // async
  const actions = {
    fetchJobDetails: async (id: Job['id']) => {
      try {
        setLoading(true);

        const { data, error } = await jobsAPI.fetchJobById(id);

        if (error) {
          throw new Error(error);
        }

        setState((prev) => ({ ...prev, data }));
      } catch (error) {
        setState((prev) => ({ ...prev, error: error.message }));
      } finally {
        setLoading(false);
      }
    },
  };

  return { state, actions };
}

export default useJobDetails;
