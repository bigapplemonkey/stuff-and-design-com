import { useEffect, useRef } from 'react';

// Helper function to extract video ID from a YouTube URL
const extractVideoId = url => {
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubePlayer = ({ videoUrl, startTime = 0, endTime = null }) => {
  const playerRef = useRef(null);
  const videoId = extractVideoId(videoUrl); // Extract the video ID from the URL

  useEffect(() => {
    if (!videoId) return; // Don't initialize if videoId is not valid

    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
        },
        events: {
          onReady: event => {
            const player = event.target;
            player.seekTo(startTime, true); // Seek to startTime

            // If endTime is provided, set up an interval to stop the video at endTime
            if (endTime !== null) {
              const interval = setInterval(() => {
                if (player.getCurrentTime() >= endTime) {
                  player.pauseVideo();
                  clearInterval(interval);
                }
              }, 1000); // Check every second
            }
          },
        },
      });
    };

    // Check if the YouTube API script has already been loaded
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }

    // Clean up when the component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, startTime, endTime]);

  return <div id="youtube-player"></div>;
};

export default YouTubePlayer;
