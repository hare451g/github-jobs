import { Job } from '../../../types/Job.types';

import styles from '../styles/ApplyGuide.module.css';

type propTypes = {
  howToApply: Job['how_to_apply'];
};

const ApplyGuide: React.FC<propTypes> = ({ howToApply }) => (
  <div>
    <h3 className={styles.heading}>How To Apply</h3>
    <p className={styles.applyGuide}>{howToApply}</p>
  </div>
);

export default ApplyGuide;
