import { FormEvent, useState } from 'react';

type propTypes = {
  initialValue?: string;
  submitSearch?: (keyword: string) => void;
  placeholder?: string;
};

const DescriptionFilter: React.FC<propTypes> = ({
  initialValue = '',
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
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleKeywordchange}
        value={keyword}
        placeholder={placeholder}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default DescriptionFilter;
