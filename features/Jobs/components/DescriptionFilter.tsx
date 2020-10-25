import { FormEvent, useState } from 'react';
import MaterialIcons from '../../../components/MaterialIcons';
import styles from './DescriptionFilter.module.css';

type propTypes = {
  initialValue?: string;
  loading?: boolean;
  submitSearch?: (keyword: string) => void;
  placeholder?: string;
};

const DescriptionFilter: React.FC<propTypes> = ({
  initialValue = '',
  loading = false,
  placeholder = 'Title, companies, expertise or benefits',
  submitSearch,
}) => {
  const [keyword, setKeyword] = useState<string>(initialValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitSearch(keyword);
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
          placeholder={placeholder}
          value={keyword}
        />
        <button
          className={styles.submitButton}
          disabled={loading}
          type="submit"
        >
          {loading ? 'Loading' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default DescriptionFilter;
