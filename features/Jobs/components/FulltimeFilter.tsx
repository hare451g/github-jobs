import { useContext } from 'react';

import { JobFeatureContext } from '../useJobFeature';

const FulltimeFilter: React.FC = () => {
  const { actions, state } = useContext(JobFeatureContext);

  return (
    <label>
      <input
        type="checkbox"
        checked={state.filter.fullTime}
        onChange={actions.handleFulltimeChange}
      />
      <span>Full time</span>
    </label>
  );
};

export default FulltimeFilter;
