import { Link } from 'react-router-dom';

const ArrowIcon = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="12"
    viewBox="0 0 15 12"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.49881 6.64005L6.64516 10.6609L5.75407 11.5798L0 6.00001L5.75407 0.420181L6.64516 1.33916L2.49881 5.35997H15V6.64005H2.49881Z"
    />
  </svg>
);

const BackToWorkLink = () => (
  <Link
    to="/work"
    aria-label="Go to Work page"
    className="work-back-button work-back-type"
  >
    <div className="work-back-icon">
      <ArrowIcon />
    </div>
    Back to Work
  </Link>
);

const WorkDetailBack = () => {
  return (
    <div className="work-back">
      <BackToWorkLink />
    </div>
  );
};
export default WorkDetailBack;
