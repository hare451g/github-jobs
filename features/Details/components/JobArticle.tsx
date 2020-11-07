import { useContext } from 'react';
import Link from 'next/link';

import { getDifferenceDate } from '../../../utils/dateTime';
import MaterialIcons from '../../../components/MaterialIcons';

import styles from '../styles/JobArticle.module.css';

import { JobDetailsContext } from '../useJobDetails';
import Skeleton from 'react-loading-skeleton';

const ApplyGuide: React.FC = () => {
  const {
    state: {
      data: {
        company,
        company_logo: companyLogo,
        created_at: createdAt,
        description,
        how_to_apply: howToApply,
        location,
        title,
        type,
      },
      isLoading,
    },
  } = useContext(JobDetailsContext);

  return (
    <div className={styles.detailContainer}>
      <section className={styles.howToApplySection}>
        <Link href="/">
          <a className={styles.navBack}>
            <MaterialIcons iconName="arrow_back" /> Back to search{' '}
          </a>
        </Link>
        <h3 className={styles.heading}>How To Apply</h3>
        {isLoading ? (
          <Skeleton width="100%" height={16} count={2} />
        ) : (
          <p
            className={styles.applyGuide}
            dangerouslySetInnerHTML={{ __html: howToApply }}
          />
        )}
      </section>
      <article className={styles.articleSection}>
        <section className={styles.headerSection}>
          <div className={styles.titleContainer}>
            {isLoading ? (
              <Skeleton height="36px" width="60%" />
            ) : (
              <h1 className={styles.jobTitle}>{title}</h1>
            )}
            <div className={styles.jobType}>{type}</div>
          </div>
          <div className={styles.datePosted}>
            <MaterialIcons iconName="access_time" />{' '}
            {isLoading ? (
              <Skeleton width={100} height={12} />
            ) : (
              <span>{getDifferenceDate(createdAt)}</span>
            )}
          </div>
        </section>
        <section className={styles.companySection}>
          {isLoading ? (
            <Skeleton width={42} height={42} className={styles.companyLogo} />
          ) : (
            <img
              className={styles.companyLogo}
              alt={`${company}'s logo`}
              src={
                companyLogo ||
                'https://via.placeholder.com/42x42.png?text=no-image'
              }
            />
          )}

          <div>
            {isLoading ? (
              <Skeleton width="100%" height="18px" />
            ) : (
              <h2 className={styles.companyName}>{company}</h2>
            )}
            <div className={styles.location}>
              <MaterialIcons iconName="public" />{' '}
              {isLoading ? <Skeleton width="75%" height="14px" /> : location}
            </div>
          </div>
        </section>
        {isLoading ? (
          <Skeleton width="60%" height="14px" count={10} />
        ) : (
          <section
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </article>
    </div>
  );
};

export default ApplyGuide;
