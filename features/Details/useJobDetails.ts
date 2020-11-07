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
  data: {
    company: 'company is not available',
    company_logo: 'https://via.placeholder.com/42',
    company_url: 'localhost',
    created_at: '02/11/2020',
    description: 'No descriptions',
    how_to_apply: 'not available',
    id: '',
    location: 'location is not available',
    title: 'Untitled Job Position',
    type: 'type',
    url: '',
  },
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
