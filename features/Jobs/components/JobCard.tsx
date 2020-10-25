import MaterialIcons from '../../../components/MaterialIcons';
import { imgAlternative } from '../../../utils/assets';
import { getDifferenceDate } from '../../../utils/dateTime';

import { Job } from '../Job.types';
import styles from './JobCard.module.css';

type propTypes = {
  id: Job['id'];
  type: Job['type'];
  created_at: Job['created_at'];
  company: Job['company'];
  location: Job['location'];
  title: Job['title'];
  company_logo: Job['company_logo'];
};

const JobCard: React.FC<propTypes> = ({
  id,
  company,
  company_logo,
  created_at,
  location,
  title,
  type,
}) => (
  <div className={styles.card}>
    <div className={styles.cardBody}>
      <img
        alt={`${company} logo`}
        className={styles.companyLogo}
        src={imgAlternative(company_logo)}
      />
      <div className={styles.jobInfo}>
        <div className={styles.jobInfoBody}>
          <p className={styles.companyName}>{company}</p>
          <p className={styles.jobTitle}>{title}</p>
          <span className={styles.jobType}>{type}</span>
        </div>
        <div className={styles.jobInfoFooter}>
          <p className={styles.jobAdditionalInfo}>
            <MaterialIcons iconName="public" /> {location}
          </p>
          <p className={styles.jobAdditionalInfo}>
            <MaterialIcons iconName="access_time" />{' '}
            {getDifferenceDate(created_at)}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default JobCard;
