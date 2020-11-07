import Link from 'next/link';

import MaterialIcons from '../../../components/MaterialIcons';

import { imgAlternative } from '../../../utils/assets';
import { getDifferenceDate } from '../../../utils/dateTime';

import { Job } from '../../../types/Job.types';

import styles from '../styles/JobCard.module.css';
import Skeleton from 'react-loading-skeleton';

type propTypes = {
  id?: Job['id'];
  type?: Job['type'];
  created_at?: Job['created_at'];
  company?: Job['company'];
  location?: Job['location'];
  title?: Job['title'];
  company_logo?: Job['company_logo'];
  isLoading?: boolean;
};

const JobCard: React.FC<propTypes> = ({
  id,
  company,
  company_logo,
  created_at,
  location,
  title,
  type,
  isLoading = false,
}) => (
  <Link href={`/${id}`}>
    <a>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          {isLoading ? (
            <Skeleton height={90} width={90} />
          ) : (
            <img
              alt={`${company} logo`}
              className={styles.companyLogo}
              src={imgAlternative(company_logo)}
              loading="lazy"
            />
          )}
          <div className={styles.jobInfo}>
            <div className={styles.jobInfoBody}>
              <p className={styles.companyName}>
                {isLoading ? <Skeleton height={16} width="100%" /> : company}
              </p>
              <p className={styles.jobTitle}>
                {isLoading ? <Skeleton height={14} width="75%" /> : title}
              </p>
              {isLoading ? (
                <Skeleton height={24} width="100px" />
              ) : (
                <span className={styles.jobType}>{type}</span>
              )}
            </div>
            <div className={styles.jobInfoFooter}>
              <p className={styles.jobAdditionalInfo}>
                <MaterialIcons iconName="public" />
                {isLoading ? <Skeleton height={12} width="100px" /> : location}
              </p>
              <p className={styles.jobAdditionalInfo}>
                <MaterialIcons iconName="access_time" />{' '}
                {isLoading ? (
                  <Skeleton height={12} width="100px" />
                ) : (
                  getDifferenceDate(created_at)
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </Link>
);

export default JobCard;
