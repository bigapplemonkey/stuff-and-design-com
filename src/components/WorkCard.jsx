import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MediaItem from './MediaItem';

const WorkCard = ({
  src,
  alt,
  title,
  labels,
  duration = 0.7,
  ease = [0.25, 0.1, 0.25, 1.0],
  threshold = 0.5,
  index,
  isDark,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);
  const titleSlug = title.toLowerCase().replace(/\s+/g, '-'); // Convert title to slug

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // Stop observing once in view
          }
        });
      },
      {
        threshold, // Trigger when the specified percentage of the element is in view
      }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
      observer.disconnect();
    };
  }, [threshold]);

  const isVideo = src.endsWith('.mp4');

  return (
    <Link to={`/work/${titleSlug}`}>
      <div className="work-card" ref={cardRef}>
        {isVideo ? (
          <video
            className={`work-card-video${isImageLoaded && inView ? ' loaded' : ''}`}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleImageLoad}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <MediaItem
            className={`work-card-image${isImageLoaded && inView ? ' loaded' : ''}`}
            src={src}
            alt={alt}
            onLoad={handleImageLoad}
          />
        )}

        <div className="work-card-info">
          <motion.h2
            className={`work-card-title work-card-type underline ${isDark ? ' is-dark' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: isImageLoaded && inView ? 1 : 0,
              y: isImageLoaded && inView ? 0 : 40,
            }}
            transition={{ duration, ease, delay: index * 0.1 }}
          >
            {title}
          </motion.h2>
          <div className="work-card-labels">
            {labels.map((label, idx) => (
              <motion.div
                className="work-card-label work-card-label-type"
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isImageLoaded && inView ? 1 : 0,
                  y: isImageLoaded && inView ? 0 : 20,
                }}
                transition={{
                  duration,
                  ease,
                  delay: index * 0.1 + 0.4 + 0.1 * idx,
                }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;

// import { useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';

// const WorkCard = ({
//   src,
//   alt,
//   title,
//   labels,
//   duration = 0.7,
//   ease = [0.25, 0.1, 0.25, 1.0],
//   threshold = 0.5,
//   index,
// }) => {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
//   const cardRef = useRef(null);

//   const inView = useInView(cardRef, { once: true, threshold });

//   const handleImageLoad = () => {
//     setIsImageLoaded(true);
//   };

//   const isVideo = src.endsWith('.mp4');

//   return (
//     <div className="work-card" ref={cardRef}>
//       {isVideo ? (
//         <video
//           className={`work-card-video${isImageLoaded && inView ? ' loaded' : ''}`}
//           autoPlay
//           loop
//           muted
//           playsInline
//           onLoadedData={handleImageLoad}
//         >
//           <source src={src} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <img
//           className={`work-card-image${isImageLoaded && inView ? ' loaded' : ''}`}
//           src={src}
//           alt={alt}
//           onLoad={handleImageLoad}
//         />
//       )}
//       <div className="work-card-info">
//         <motion.h2
//           className="work-card-title work-card-type underline"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{
//             opacity: isImageLoaded && inView ? 1 : 0,
//             y: isImageLoaded && inView ? 0 : 40,
//           }}
//           transition={{ duration, ease, delay: index * 0.1 }}
//         >
//           {title}
//         </motion.h2>
//         <div className="work-card-labels">
//           {labels.map((label, idx) => (
//             <motion.div
//               className="work-card-label work-card-label-type"
//               key={label}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{
//                 opacity: isImageLoaded && inView ? 1 : 0,
//                 y: isImageLoaded && inView ? 0 : 20,
//               }}
//               transition={{
//                 duration,
//                 ease,
//                 delay: index * 0.1 + 0.4 + 0.1 * idx,
//               }}
//             >
//               {label}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkCard;
