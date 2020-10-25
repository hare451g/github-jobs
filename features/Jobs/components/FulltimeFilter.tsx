type propTypes = {
  isFulltime: boolean;
  onFulltimeChange: () => void;
};

const FulltimeFilter: React.FC<propTypes> = ({
  isFulltime,
  onFulltimeChange,
}) => (
  <label>
    <input type="checkbox" checked={isFulltime} onChange={onFulltimeChange} />
    <span>Full time</span>
  </label>
);

export default FulltimeFilter;
