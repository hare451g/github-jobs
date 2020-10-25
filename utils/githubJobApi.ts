import Axios from 'axios';

const githubJobApi = Axios.create({
  baseURL: 'https://github-jobs-proxy.appspot.com',
  timeout: 20 * 1000,
});

export default githubJobApi;
