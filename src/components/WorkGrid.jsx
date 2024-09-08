import WorkCard from './WorkCard';

const WorkGrid = ({ selectedFilters, works }) => {
  const filteredWorkData = works.filter(
    work =>
      selectedFilters.includes('All projects') ||
      work.labels.some(label => selectedFilters.includes(label))
  );

  return (
    <div className="work-grid">
      {filteredWorkData.map((work, index) => (
        <WorkCard
          key={work.title}
          src={work.cardSrc}
          alt={work.title}
          title={work.title}
          labels={work.labels}
          index={index}
        />
      ))}
    </div>
  );
};

export default WorkGrid;
