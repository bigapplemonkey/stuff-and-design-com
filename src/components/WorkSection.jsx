import { useEffect, useState } from 'react';
import WorkGrid from './WorkGrid';
import Filter from './Filter';
import { useSearchParams } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';

const getRandomImage = () => {
  const width = Math.max(500, Math.floor(Math.random() * 1000));
  const height = Math.max(500, Math.floor(Math.random() * 700));
  return `https://picsum.photos/${width}/${height}`;
};

const staticWorkData = [
  {
    title: 'Lorem ipsum dolor sit',
    labels: ['Web Development', 'UI Design'],
    src: getRandomImage(),
  },
  {
    title: 'Consectetur adipiscing elit',
    labels: ['Graphic Design'],
    src: 'https://res.cloudinary.com/jasuaje/video/upload/v1720359486/freecompress_mp4.mp4',
  },
  {
    title: 'Sed do eiusmod tempor',
    labels: ['Motion', 'UI Design'],
    src: getRandomImage(),
  },
  {
    title: 'Ut enim ad minim veniam',
    labels: ['Web Development'],
    src: 'https://res.cloudinary.com/jasuaje/video/upload/v1720360325/freecompress-button_v2.mp4',
  },
  {
    title: 'Quis nostrud exercitation ullamco',
    labels: ['Web Development', 'Graphic Design'],
    src: getRandomImage(),
  },
  {
    title: 'Duis aute irure dolor in',
    labels: ['UI Design'],
    src: getRandomImage(),
  },
  {
    title: 'Velit esse cillum dolore eu',
    labels: ['Motion', 'Graphic Design'],
    src: getRandomImage(),
  },
  {
    title: 'Velit nostrud cillum eu',
    labels: ['Motion'],
    src: getRandomImage(),
  },
];

const WorkSection = () => {
  const [selectedFilters, setSelectedFilters] = useState(['All projects']);
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = [
    'All projects',
    ...new Set(staticWorkData.flatMap(work => work.labels)),
  ];

  // Update selectedFilters from URL parameters
  useEffect(() => {
    const filterParams = searchParams.get('filter');
    if (filterParams) {
      const filtersFromUrl = filterParams.split(',');
      setSelectedFilters(filtersFromUrl);
    } else {
      setSelectedFilters(['All projects']);
      updateURL(['All projects']);
    }
  }, [searchParams]);

  const updateURL = filters => {
    setSearchParams({ filter: filters.join(',') });
  };

  const toggleFilter = filter => {
    if (filter === 'All projects') {
      setSelectedFilters(['All projects']);
      updateURL(['All projects']);
    } else {
      const newFilters = selectedFilters.includes(filter)
        ? selectedFilters.filter(f => f !== filter)
        : [...selectedFilters.filter(f => f !== 'All projects'), filter];

      setSelectedFilters(
        newFilters.length === 0 ? ['All projects'] : newFilters
      );
      updateURL(newFilters.length === 0 ? ['All projects'] : newFilters);
    }
  };

  useEffect(() => {
    if (
      selectedFilters.length === filters.length - 1 &&
      !selectedFilters.includes('All projects')
    ) {
      setSelectedFilters(['All projects']);
      updateURL(['All projects']);
    }
  }, [selectedFilters, filters]);

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
      <WorkGrid selectedFilters={selectedFilters} works={staticWorkData} />
      <ScrollToTopButton />
    </section>
  );
};

export default WorkSection;
