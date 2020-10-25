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
  const popularLocations = [
    'Amsterdam',
    'Berlin',
    'Indonesia',
    'London',
    'New York',
  ];

  const [keyword, setKeyword] = useState<string>(initialValue);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setKeyword(e.target.value);
    onSubmit(e.target.value);
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
              onChange={handleChangeCheckbox}
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
