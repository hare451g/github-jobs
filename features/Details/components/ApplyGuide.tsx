import { useContext } from 'react';

import { getDifferenceDate } from '../../../utils/dateTime';
import MaterialIcons from '../../../components/MaterialIcons';
import styles from '../styles/ApplyGuide.module.css';
import { JobDetailsContext } from '../useJobDetails';
import Link from 'next/link';

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
        <p
          className={styles.applyGuide}
          dangerouslySetInnerHTML={{
            __html: isLoading ? 'loading . . . ' : howToApply,
          }}
        />
      </section>
      <article className={styles.articleSection}>
        <section className={styles.headerSection}>
          <div className={styles.titleContainer}>
            <h1 className={styles.jobTitle}>{title}</h1>
            <div className={styles.jobType}>{type}</div>
          </div>
          <div className={styles.datePosted}>
            <MaterialIcons iconName="access_time" />{' '}
            <span>{getDifferenceDate(createdAt)}</span>
          </div>
        </section>
        <section className={styles.companySection}>
          <img
            className={styles.companyLogo}
            alt={`${company}'s logo`}
            src={companyLogo}
            height={42}
            width={42}
          />
          <div>
            <h2 className={styles.companyName}>{company}</h2>
            <div className={styles.location}>
              <MaterialIcons iconName="public" /> {location}
            </div>
          </div>
        </section>
        <section
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></section>
      </article>
    </div>
  );
};

export default ApplyGuide;
