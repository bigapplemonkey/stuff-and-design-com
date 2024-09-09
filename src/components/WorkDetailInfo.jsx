const WorkDetailInfo = ({ title, summary, labels, tools }) => {
  return (
    <div className="work-detail-info">
      <div className="work-detail-header">
        <h1 className="work-detail-title work-detail-title-type">{title}</h1>
        <div className="work-detail-summary">
          <p className="work-detail-summary-type">{summary}</p>
        </div>
      </div>
      <div className="work-kind">
        <div className="work-kind-tags work-kind-tags-type">
          <div>Tags</div>
          <div className="work-tags">
            {labels.sort().map(tag => {
              return (
                <div className="filter filter-type" key={tag}>
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className="work-kind-tools work-kind-tools-type">
          <div>Tools</div>
          <div className="work-tools">
            {tools.sort().map(tool => {
              return (
                <div className="filter filter-type" key={tool}>
                  {tool}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailInfo;
