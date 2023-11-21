import React, { useState, useEffect } from 'react';

interface VimeoVideoProps {
    videoId: string;
    videoTitle: string;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId, videoTitle }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
        fetch(`https://vimeo.com/api/v2/video/${videoId}.json`)
            .then(response => response.json())
            .then(data => {
                if (data && data[0] && data[0].thumbnail_large) {
                    setThumbnailUrl(data[0].thumbnail_large);
                }
            })
            .catch(error => console.error('Error fetching Vimeo thumbnail:', error));
    }, [videoId]);

    return (
        <div className="video-wrapper" style={{ backgroundImage: `url(${thumbnailUrl})` }}>
            <iframe
                src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1`}
                allow="autoplay"
                title={videoTitle}
            ></iframe>
        </div>
    );
};

export default VimeoVideo;