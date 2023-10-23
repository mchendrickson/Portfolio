import React from 'react';

interface VimeoVideoProps {
    videoId: string;
    videoTitle: string;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId, videoTitle }) => {
    return (
        <div className="video-wrapper">
            <iframe
                src={`https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1`}
                allow="autoplay"
                title={videoTitle}
            ></iframe>
        </div>
    );
};

export default VimeoVideo;