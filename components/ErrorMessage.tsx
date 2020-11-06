import MaterialIcons from './MaterialIcons';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => (
  <div className={styles.container}>
    <MaterialIcons iconName="error_outline" size="lg" />
    <p>{error || 'An unhandled error occurred'}</p>
  </div>
);

export default ErrorMessage;
