import DescriptionFilter from './components/DescriptionFilter';
import FulltimeFilter from './components/FulltimeFilter';
import JobList from './components/JobList';
import LocationFilter from './components/LocationFilter';

import styles from './styles/index.module.css';

import useJobFeature, { JobFeatureContext } from './useJobFeature';

const Jobs: React.FC = () => {
  const jobFeature = useJobFeature();

  return (
    <JobFeatureContext.Provider value={jobFeature}>
      <section className={styles.descriptionFilterSection}>
        <DescriptionFilter />
      </section>
      <div className={styles.body}>
        <section className={styles.filterSection}>
          <div className={styles.fulltimeFilterSection}>
            <FulltimeFilter />
          </div>
          <div className={styles.locationFilterSection}>
            <LocationFilter />
          </div>
        </section>
        <section className={styles.jobSection}>
          <JobList />
        </section>
      </div>
    </JobFeatureContext.Provider>
  );
};

export default Jobs;
