import { useContext, useState } from 'react';

import MaterialIcons from '../../../components/MaterialIcons';
import { JobFeatureContext } from '../useJobFeature';

import styles from '../styles/LocationFilter.module.css';

const LocationFilter: React.FC = () => {
  const { actions } = useContext(JobFeatureContext);

  const popularLocations = [
    'Amsterdam',
    'Berlin',
    'Indonesia',
    'London',
    'New York',
  ];

  const [keyword, setKeyword] = useState<string>('');

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    actions.handleLocationChange(keyword);
  };

  return (
    <div>
      <h4 className={styles.formTitle}>Location</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <MaterialIcons iconName="public" />{' '}
          <input
            className={styles.locationInput}
            name="location"
            onChange={handleKeywordChange}
            value={keyword}
            placeholder="City, state, zip code or country"
          />
        </div>
        {popularLocations.map((locationName) => (
          <label className={styles.checkBox}>
            <input
              type="checkbox"
              value={locationName}
              onChange={handleKeywordChange}
              checked={keyword === locationName}
            />
            <span>{locationName}</span>
          </label>
        ))}
      </form>
    </div>
  );
};

export default LocationFilter;
