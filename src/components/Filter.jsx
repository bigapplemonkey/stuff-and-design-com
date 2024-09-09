import { motion } from 'framer-motion';

const Filter = ({ filterName, isSelected = false, toggleFilter }) => {
  return (
    <motion.button
      className={`filter filter-type${isSelected ? ' selected' : ''}`}
      onClick={() => toggleFilter(filterName)}
    >
      {filterName}
      <div className="filter-close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none">
          <path
            id="close_path"
            fillRule="evenodd"
            d="M5.408 4.999L9.45 8.849 8.766 9.5 4.725 5.651.683 9.5 0 8.849l4.041-3.85L0 1.151.683.5l4.042 3.85L8.766.5l.684.651-4.042 3.85z"
          />
        </svg>
      </div>
    </motion.button>
  );
};

export default Filter;
