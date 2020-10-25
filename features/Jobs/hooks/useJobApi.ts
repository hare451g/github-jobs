import { useState } from 'react';
import githubJobApi from '../../../utils/githubJobApi';
import {
  Job,
  fetchPositionsType,
  listType,
  idsType,
  jobStateTypes,
} from '../Job.types';

const normalizer = (previous: Job | {}, current: Job) => ({
  ...previous,
  [current.id]: current,
});

function useJobApi() {
  const [state, setState] = useState<jobStateTypes>({
    loading: false,
    error: undefined,
    list: {},
    ids: [],
  });

  /**
   * Fetch jobs positions
   * @param description — A search term, such as "ruby" or "java". This parameter is aliased to search.
   * @param location — A city name, zip code, or other location search term.
   * @param lat — A specific latitude. If used, you must also send long and must not send location.
   * @param long — A specific longitude. If used, you must also send lat and must not send location.
   * @param full_time — If you want to limit results to full time positions set this parameter to 'true'.
   * For more information, visit this link https://jobs.github.com/api.
   */
  const performFetchJob: fetchPositionsType = async ({
    description,
    location,
    lat,
    long,
    fullTime,
  }) => {
    try {
      setState((prevState) => ({ ...prevState, loading: true }));

      const response = await githubJobApi.get('positions', {
        params: {
          description,
          location,
          lat,
          long,
          full_time: fullTime,
        },
      });

      // normalize data
      const data: Array<Job> = response.data;
      const ids: idsType = data.map(({ id }) => id);
      const list: listType = data.reduce(normalizer, {});

      setState((prevState) => ({
        ...prevState,
        list,
        ids,
      }));
    } catch (error) {
      setState((prevState) => ({ ...prevState, error: error.message }));
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return {
    state,
    actions: {
      performFetchJob,
    },
  };
}

export default useJobApi;
