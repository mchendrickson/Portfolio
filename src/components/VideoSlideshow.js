import React, {useEffect, useState} from "react";

const VideoSlideshow = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(goToNextVideo, 5000);
        return () => clearTimeout(timer);
    }, [currentVideoIndex]);

    const goToNextVideo = () => {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="video-slideshow">
            {videos.map((video, index) => (
                <video
                    key={index}
                    autoPlay={index === currentVideoIndex}
                    loop
                    muted
                    className={`slideshow-video ${
                        index === currentVideoIndex ? "active" : ""
                    }`}
                    style={{ display: index === currentVideoIndex ? "block" : "none" }}
                    onEnded={goToNextVideo}
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ))}
        </div>
    );
};

export default VideoSlideshow;