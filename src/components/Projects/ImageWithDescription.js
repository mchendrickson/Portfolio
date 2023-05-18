import React, { useState } from "react";
import PropTypes from "prop-types";

function ImageWithDescription({ src, alt, description }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="image-with-description"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={src} alt={alt} className="img-fluid rounded" />
            {isHovered && <div className="image-description">{description}</div>}
        </div>
    );
}

ImageWithDescription.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ImageWithDescription;