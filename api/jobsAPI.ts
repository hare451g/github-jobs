import {
  jobListFilters,
  jobListType,
  Job,
  jobIdsType,
} from '../types/Job.types';
import githubJobApi from '../utils/githubJobApi';

const normalizer = (previous: Job | {}, current: Job) => ({
  ...previous,
  [current.id]: current,
});

async function fetchJobList(filters: jobListFilters, page: number = 0) {
  try {
    const response = await githubJobApi.get('positions.json', {
      params: { ...filters, page },
    });

    // normalize data
    const data: Array<Job> = response.data;
    const ids: jobIdsType = data.map(({ id }) => id);
    const list: jobListType = data.reduce(normalizer, {});

    return { ids, list };
  } catch (error) {
    return { error: error.message };
  }
}

async function fetchJobById(id: Job['id']) {
  try {
    if (!id) {
      throw new Error('Invalid id!');
    }

    const endpoint = `positions/${id}.json`;
    const response = await githubJobApi.get(endpoint);

    // normalize data
    const data: Job = response.data;

    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

export default { fetchJobById, fetchJobList };
