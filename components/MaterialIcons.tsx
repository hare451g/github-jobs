import styles from './MaterialIcons.module.css';

const MaterialIcons = ({ iconName }) => (
  <span className={styles.materialIconsWwrapper}>
    <i className="material-icons">{iconName}</i>
  </span>
);

export default MaterialIcons;
