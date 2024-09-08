import MediaItem from './MediaItem';

const MediaGrid = ({ mediaItems }) => {
  return (
    <div className="media-grid">
      {mediaItems.map((item, index) => (
        <div key={index} className={`media-item col-span-${item.width}`}>
          {item.src.endsWith('.mp4') ? (
            <video
              className="media-content"
              alt={item.alt}
              autoPlay
              loop
              muted
              playsInline
              // onLoadedData={handleImageLoad}
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
