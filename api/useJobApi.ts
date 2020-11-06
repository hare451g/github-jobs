import { useState } from 'react';
import {
  Job,
  jobIdsType,
  jobListFilters,
  jobListType,
} from '../types/Job.types';

import jobsAPI from './jobsAPI';

function useJobApi() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job>();
  const [jobList, setJobList] = useState<{
    ids: jobIdsType;
    list: jobListType;
  }>({
    ids: undefined,
    list: undefined,
  });

  // Perform Fetch data
  // Job by ID
  const fetchJobById = async (id: Job['id']) => {
    setLoading(true);
    const { data, error } = await jobsAPI.fetchJobById(id);
    if (error) {
      setError(error);
    } else {
      setSelectedJob(data);
    }
    setLoading(false);
  };

  // Job list
  const fetchJobList = async (filter: jobListFilters) => {
    setLoading(true);
    const { error, ids, list } = await jobsAPI.fetchJobList(filter);
    if (error) {
      setError(error);
    } else {
      setJobList({ ids, list });
    }
    setLoading(false);
  };

  return {
    state: {
      error,
      loading,
      selectedJob,
      list: jobList.list,
      ids: jobList.ids,
    },
    actions: {
      fetchJobById,
      fetchJobList,
    },
  };
}

export default useJobApi;
