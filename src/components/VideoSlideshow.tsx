import React, { useEffect, useState } from "react";
import VideoJS from "./VideoJS";
import { defaultAutoplayOptions } from "./VideoJS";

const VideoSlideshow = ({ videos }: { videos: string[] }) => {
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

    const handlePlayerReady = (player : any) => {
        // Play the current video when the player is ready
        if (player) {
            player.play();
        }
    };

    return (
        <div className="video-wrapper">
            {videos.map((video: string, index: number) => (
                <div
                    key={index}
                    style={{ display: index === currentVideoIndex ? "block" : "none" }}
                >
                    <VideoJS
                        options={{
                            ...defaultAutoplayOptions,
                            autoplay: index === currentVideoIndex,
                            sources: {
                                src: video,
                                type: "video/youtube",
                            },
                        }}
                        onReady={handlePlayerReady}
                    />
                </div>
            ))}
        </div>
    );
};

export default VideoSlideshow;