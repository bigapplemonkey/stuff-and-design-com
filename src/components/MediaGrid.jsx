import { useState } from 'react';
import MediaItem from './MediaItem';
import YouTubePlayer from './YouTubePlayer';

const MediaGrid = ({ mediaItems }) => {
  const [canPlay, setCanPlay] = useState(true);

  const handleCanPlay = () => {
    setCanPlay(true);
  };

  const handleError = () => {
    setCanPlay(false);
  };

  const isYouTubeURL = url => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  return (
    <div className="media-grid">
      {mediaItems.map((item, index) => (
        <div key={index} className={`media-item col-span-${item.width}`}>
          {item.src.endsWith('.mp4') ? (
            <video
              className="media-content"
              alt={item.alt}
              autoPlay={canPlay}
              loop
              muted
              playsInline
              controls={!canPlay} // Show controls if autoplay is not allowed
              onCanPlay={handleCanPlay}
              onError={handleError}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : isYouTubeURL(item.src) ? (
            <YouTubePlayer videoUrl={item.src} />
          ) : (
            <MediaItem
              src={item.src}
              alt={item.alt}
              className="media-content"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
