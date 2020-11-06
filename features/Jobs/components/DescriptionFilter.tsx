import { FormEvent, useContext, useState } from 'react';
import MaterialIcons from '../../../components/MaterialIcons';
import { JobFeatureContext } from '../useJobFeature';
import styles from './DescriptionFilter.module.css';

const DescriptionFilter: React.FC = () => {
  const {
    actions,
    state: { isLoading },
  } = useContext(JobFeatureContext);

  const [keyword, setKeyword] = useState<string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.handleSubmitSearch(keyword);
  };

  const handleKeywordchange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  return (
    <div className={styles.searchContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <MaterialIcons iconName="work_outline" />
        <input
          className={styles.searchInput}
          onChange={handleKeywordchange}
          placeholder="City, state, zip, country"
          value={keyword}
        />
        <button
          className={styles.submitButton}
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? 'Loading' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default DescriptionFilter;
