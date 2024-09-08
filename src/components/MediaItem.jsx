const MediaItem = ({ src, alt, className = '', onLoad }) => {
  // Determine if src already contains an extension
  const hasExtension = /\.(jpg|jpeg|png)$/i.test(src);

  // Generate source elements only if src has an extension
  const sources = hasExtension
    ? [
        { width: 1200, type: 'image/jpeg' },
        { width: 600, type: 'image/jpeg' },
        { width: 300, type: 'image/jpeg' },
        { width: 1200, type: 'image/png' },
        { width: 600, type: 'image/png' },
        { width: 300, type: 'image/png' },
      ].map(({ width, type }) => {
        const ext = type.split('/')[1];
        console.log(
          `${src.replace(/\.(jpg|jpeg|png)$/i, '')}-${width}w.${ext}`
        );
        return (
          <source
            key={`${width}-${ext}`}
            srcSet={`${src.replace(/\.(jpg|jpeg|png)$/i, '')}-${width}w.${ext}`}
            media={`(min-width: ${width}px)`}
            type={type}
          />
        );
      })
    : null;

  const fallbackSrc = hasExtension
    ? `${src.replace(/\.(jpg|jpeg|png)$/i, '')}-300w.${src.match(/\.(jpg|jpeg|png)$/i)?.[0]}`
    : src;

  return (
    <picture className={`media-content ${className}`}>
      {sources}
      <img
        src={fallbackSrc}
        alt={alt}
        className={`media-content ${className}`}
        onLoad={onLoad}
        onError={e => {
          e.target.src = src;
        }}
      />
    </picture>
  );
};

export default MediaItem;
