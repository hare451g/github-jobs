import Axios from 'axios';

const PROXY = 'https://cors-anywhere.herokuapp.com';
const GITHUB_JOB_API_URL = 'https://jobs.github.com/';

const githubJobApi = Axios.create({
  baseURL: `${PROXY}/${GITHUB_JOB_API_URL}`,
  timeout: 20 * 1000,
});

export default githubJobApi;
