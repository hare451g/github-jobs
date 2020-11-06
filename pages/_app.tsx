import JobContext from '../api/JobContext';
import useJobApi from '../api/useJobApi';
import '../styles/globals.css';

function GithubJobsApp({ Component, pageProps }) {
  const jobAPIProvider = useJobApi();
  return (
    <JobContext.Provider value={jobAPIProvider}>
      <Component {...pageProps} />
    </JobContext.Provider>
  );
}

export default GithubJobsApp;
