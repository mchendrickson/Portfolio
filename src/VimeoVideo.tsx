import React, {useEffect, useState} from 'react';
import {useInView} from "react-intersection-observer";

interface VimeoVideoProps {
    videoId: string;
    videoTitle: string;
}

/**
 * Attempts to replace everything after "-d_" with "-d_{desiredWidth}".
 * If the HEAD request for the upgraded URL is successful, returns it;
 * otherwise falls back to the original URL.
 */
async function tryUpgradeResolution(
    originalUrl: string,
    desiredWidth: number
): Promise<string> {
    const dashIndex = originalUrl.indexOf('-d_');
    if (dashIndex === -1) {
        // If there's no "-d_", just return the original URL
        return originalUrl;
    }

    // Build new URL up to "-d_", then append "-d_{desiredWidth}"
    const prefix = originalUrl.substring(0, dashIndex);
    const biggerUrl = prefix + `-d_${desiredWidth}`;

    try {
        const response = await fetch(biggerUrl, {method: 'HEAD'});
        if (response.ok) {
            // 200 or 204 => We can use the bigger thumbnail
            return biggerUrl;
        }
    } catch (err) {
        console.warn('Failed to fetch upgraded-resolution thumbnail', err);
    }
    // If we hit a 404 or any other error, just return the original
    return originalUrl;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({videoId, videoTitle}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(() => {
        async function fetchThumbnail() {
            try {
                // Use Vimeo's V2 JSON API for public videos
                const v2ApiUrl = `https://vimeo.com/api/v2/video/${videoId}.json`;
                const response = await fetch(v2ApiUrl);
                if (!response.ok) {
                    throw new Error(`V2 request failed: ${response.status}`);
                }
                const data = await response.json();

                if (data && data[0]) {
                    // Attempt to get the video's native width, else default to 1920
                    let targetWidth = 1920;
                    if (data[0].width && typeof data[0].width === 'number') {
                        targetWidth = data[0].width;
                    }

                    if (data[0].thumbnail_large) {
                        const possiblyBigger = await tryUpgradeResolution(
                            data[0].thumbnail_large,
                            targetWidth
                        );
                        setThumbnailUrl(possiblyBigger);
                    }
                }
            } catch (error) {
                console.error('Error fetching Vimeo thumbnail:', error);
            }
        }

        fetchThumbnail();
    }, [videoId]);

    // For a public video, we just build the standard embed URL
    const embedSrc = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1`;
    const {ref, inView} = useInView({
        rootMargin: '400px', // Preload when 400px away from viewport
        threshold: 0,      // Trigger when the video is in view
        triggerOnce: true,   // Load video only once
    });
    return (
        <div ref={ref}
             className="video-wrapper"
             style={{backgroundImage: `url(${thumbnailUrl})`}}
        >
            {inView && (
                <iframe
                    src={embedSrc}
                    allow="autoplay"
                    title={videoTitle}
                />
            )}
        </div>
    );
};

export default VimeoVideo;
