import AnimatedComponent from './animations/AnimatedComponent';
import MediaGrid from './MediaGrid';
import MediaItem from './MediaItem';
import ScrollToTopButton from './ScrollToTopButton';
import WorkCard from './WorkCard';

const WorkDetailContent = ({ coverSrc, coverAlt, content, moreWork }) => {
  const isVideo = src => src.endsWith('.mp4');

  return (
    <div className="work-detail-content">
      <div className="work-detail-cover">
        {isVideo(coverSrc) ? (
          <video autoPlay loop muted playsInline>
            <source src={coverSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <MediaItem src={coverSrc} alt={coverAlt} />
        )}
      </div>
      {content.map((contentItem, index) => (
        <div key={index} className="work-detail-content-item">
          {contentItem.beforeParagraph && (
            <AnimatedComponent>
              <div className="work-detail-paragraph">
                <p className="work-detail-paragraph-type">
                  {contentItem.beforeParagraph}
                </p>
              </div>
            </AnimatedComponent>
          )}
          {contentItem.mediaItems && (
            <AnimatedComponent scale={true}>
              <div className="work-detail-media">
                <MediaGrid mediaItems={contentItem.mediaItems} />
              </div>
            </AnimatedComponent>
          )}
          {contentItem.afterParagraph && (
            <AnimatedComponent>
              <div className="work-detail-paragraph">
                <p className="work-detail-paragraph-type">
                  {contentItem.afterParagraph}
                </p>
              </div>
            </AnimatedComponent>
          )}
        </div>
      ))}
      <div className="more-work">
        <h2 className="more-work-header more-work-header-type">More work</h2>
        <div className="work-grid">
          {moreWork.map((work, index) => (
            <WorkCard
              key={work.title || index}
              src={work.cardSrc}
              alt={work.title}
              title={work.title}
              labels={work.labels}
              index={index}
              isDark
            />
          ))}
        </div>
        <ScrollToTopButton offset={0} isDark />
      </div>
    </div>
  );
};

export default WorkDetailContent;
