import Link from 'next/link';
import { useEffect } from 'react';
import MaterialIcons from '../../components/MaterialIcons';
import styles from './styles/index.module.css';
import useJobDetails, { JobDetailsContext } from './useJobDetails';

function Details({ id }) {
  const jobDetailsFeature = useJobDetails();

  useEffect(() => {
    jobDetailsFeature.actions.fetchJobDetails(id);
  }, [id]);

  return (
    <JobDetailsContext.Provider value={jobDetailsFeature}>
      <h1>Github Jobs</h1>
      <Link href="/">
        <a className={styles.navBack}>
          <MaterialIcons iconName="arrow_back" /> Back to search{' '}
        </a>
      </Link>
      <p>path: {id}</p>
    </JobDetailsContext.Provider>
  );
}

export default Details;
