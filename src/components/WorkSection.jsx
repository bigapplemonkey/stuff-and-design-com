import { useEffect, useState, useCallback, useMemo, useContext } from 'react';
import WorkGrid from './WorkGrid';
import Filter from './Filter';
import { useSearchParams } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';
import { DataContext } from '../context/DataContext';

const WorkSection = () => {
  const [selectedFilters, setSelectedFilters] = useState(['All projects']);
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useContext(DataContext);

  const filters = [
    'All projects',
    ...new Set(data.works.flatMap(work => work.labels)),
  ];

  const updateURL = useCallback(
    filters => {
      setSearchParams({ filter: filters.join(',') });
    },
    [setSearchParams]
  );

  const toggleFilter = filter => {
    if (filter === 'All projects') {
      setSelectedFilters(['All projects']);
      updateURL(['All projects']);
    } else {
      let newFilters = [];

      if (selectedFilters.includes('All projects')) {
        newFilters = [filter];
      } else {
        newFilters = selectedFilters.includes(filter)
          ? selectedFilters.filter(f => f !== filter)
          : [...selectedFilters, filter];
      }

      setSelectedFilters(
        newFilters.length === 0 ? ['All projects'] : newFilters
      );
      updateURL(newFilters.length === 0 ? ['All projects'] : newFilters);
    }
  };

  useEffect(() => {
    const filterParams = searchParams.get('filter');

    if (filterParams) {
      const filtersFromUrl = filterParams.split(',');
      if (JSON.stringify(filtersFromUrl) !== JSON.stringify(selectedFilters)) {
        setSelectedFilters(filtersFromUrl);
      }
    } else {
      if (
        selectedFilters.length === filters.length - 1 &&
        !selectedFilters.includes('All projects')
      ) {
        setSelectedFilters(['All projects']);
        updateURL(['All projects']);
      }
    }
  }, [searchParams, filters, selectedFilters, updateURL]);

  return (
    <section className="work-container">
      {/* <h1 className="hero-header hero-type non-marquee">
        <span className="hero-asterisk hero-asterisk-type">*</span>
        <span>Project Gallery</span>
        <span className="hero-asterisk hero-asterisk-type">*</span>
      </h1> */}
      <div className="filter-container">
        <div className="filter-title-type">Filter by: </div>
        <div className="filters">
          {filters.map(filter => (
            <Filter
              key={filter}
              filterName={filter}
              isSelected={selectedFilters.includes(filter)}
              toggleFilter={toggleFilter}
            />
          ))}
        </div>
      </div>
      <WorkGrid selectedFilters={selectedFilters} works={data.works} />
      <ScrollToTopButton />
    </section>
  );
};

export default WorkSection;
