import React, {useEffect, useState} from 'react';
import {useInView} from "react-intersection-observer";

/**
 * Props interface for the VimeoVideo component.
 * 
 * @param {string} videoId - The Vimeo video ID to embed
 * @param {string} videoTitle - The title of the video for accessibility
 */
interface VimeoVideoProps {
    videoId: string;
    videoTitle: string;
}

/**
 * Attempts to upgrade the resolution of a Vimeo thumbnail URL.
 * 
 * Tries to replace the resolution parameter in a Vimeo thumbnail URL
 * with a higher resolution version. It makes a HEAD request to verify the higher
 * resolution version exists before returning it, otherwise falls back to the original URL.
 * 
 * @param {string} originalUrl - The original Vimeo thumbnail URL
 * @param {number} desiredWidth - The desired width for the upgraded thumbnail
 * @returns {Promise<string>} The upgraded URL if available, otherwise the original URL
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

/**
 * Renders a Vimeo video with lazy loading and high-resolution thumbnails.
 * 
 * Fetches video metadata from Vimeo's API to get high-resolution thumbnails,
 * implements lazy loading using react-intersection-observer to only load videos when they're
 * near the viewport, and provides a background thumbnail while the video loads.
 * 
 * @param {VimeoVideoProps} props - Component props containing video ID and title
 * @returns {JSX.Element} A div containing the video iframe with background thumbnail
 */
const VimeoVideo: React.FC<VimeoVideoProps> = ({videoId, videoTitle}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    /**
     * Fetches video metadata and high-resolution thumbnail from Vimeo API.
     * 
     * Runs when the videoId changes and:
     * 1. Fetches video metadata from Vimeo's V2 JSON API
     * 2. Attempts to upgrade the thumbnail resolution based on the video's native width
     * 3. Sets the thumbnail URL for the background image
     * 4. Handles errors gracefully with console logging
     */
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
    const {ref} = useInView({
        rootMargin: '450px 0px 450px 0px', // Preload when 450px away from viewport
        threshold: 0,      // Trigger when the video is in view
        triggerOnce: false,   // Load video only once
    });
    return (
        <div ref={ref}
             className="video-wrapper"
             style={{backgroundImage: `url(${thumbnailUrl})`}}
        >
            {(
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
