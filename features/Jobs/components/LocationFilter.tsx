import { useState } from 'react';
import MaterialIcons from '../../../components/MaterialIcons';
import styles from './LocationFilter.module.css';

type propTypes = {
  onSubmit: (keyword: string) => void;
  initialValue: string;
};

const LocationFilter: React.FC<propTypes> = ({
  onSubmit,
  initialValue = '',
}) => {
  const [keyword, setKeyword] = useState<string>(initialValue);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  return (
    <div>
      <h4 className={styles.formTitle}>Location</h4>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <MaterialIcons iconName="public" />{' '}
        <input
          className={styles.locationInput}
          name="location"
          onChange={handleKeywordChange}
          value={keyword}
          placeholder="City, state, zip code or country"
        />
      </form>
    </div>
  );
};

export default LocationFilter;
