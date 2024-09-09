import { useContext } from 'react';
import LandingFooter from '../components/LandingFooter';
import Navigation from '../components/Navigation';
import WorkDetailBack from '../components/WorkDetailBack';
import WorkDetailContent from '../components/WorkDetailContent';
import WorkDetailInfo from '../components/WorkDetailInfo';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const WorkDetail = () => {
  const { titleSlug } = useParams();
  const { data } = useContext(DataContext);

  const work = data.works.find(
    work => work.title.toLowerCase().replace(/\s+/g, '-') === titleSlug
  );
  const currentIndex = data.works.indexOf(work);

  const getNextWorks = (startIndex, count) => {
    let nextWorks = [];
    for (let i = 1; i <= count; i++) {
      const index = (startIndex + i) % data.works.length;
      nextWorks.push(data.works[index]);
    }
    return nextWorks;
  };

  const staticWorkData = getNextWorks(currentIndex, 3);
  const { title, summary, labels, tools, coverSrc, coverAlt, content } = work;

  return (
    <>
      <Navigation isDark />
      <div className="relative">
        <div className="sticky">
          <WorkDetailBack />
          <WorkDetailInfo
            title={title}
            summary={summary}
            labels={labels}
            tools={tools}
          />
        </div>

        <WorkDetailContent
          coverSrc={coverSrc}
          coverAlt={coverAlt}
          content={content}
          moreWork={staticWorkData}
        />
      </div>
      <LandingFooter showFooterLogo isDark />
    </>
  );
};
export default WorkDetail;
