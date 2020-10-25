import { useState } from 'react';

type propTypes = {
  initialValue: boolean;
  onFulltimeChange: (current?: boolean) => void;
};

const FulltimeFilter: React.FC<propTypes> = ({
  initialValue = false,
  onFulltimeChange,
}) => {
  const handleCheckChange = () => {
    onFulltimeChange(!initialValue || undefined);
  };

  return (
    <label>
      <input type="checkbox" onChange={handleCheckChange} />
      <span>Full time</span>
    </label>
  );
};

export default FulltimeFilter;
