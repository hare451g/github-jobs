import styles from './MaterialIcons.module.css';

type propTypes = {
  iconName: string;
  size?: string;
};

const MaterialIcons: React.FC<propTypes> = ({ iconName, size = 'md' }) => (
  <span className={styles.materialIconsWwrapper}>
    <i className={`material-icons ${styles[size]}`}>{iconName}</i>
  </span>
);

export default MaterialIcons;
