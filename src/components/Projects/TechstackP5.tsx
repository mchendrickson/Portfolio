import React from 'react';
import IconStack from '../IconStack';
import {
    SiJavascript,
    SiP5Dotjs
} from 'react-icons/si';

interface TechstackP5Props {
    small?: boolean;
}

function TechstackP5({small}: TechstackP5Props) {
    const items = [
        { icon: SiP5Dotjs, label: 'P5.js' },
        { icon: SiJavascript, label: 'JavaScript' },
    ];

    return <IconStack items={items} small={small} />;
}

export default TechstackP5;