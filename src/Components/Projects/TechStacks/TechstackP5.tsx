import React from 'react';
import IconStack from '../../IconStack';
import {SiJavascript, SiP5Dotjs} from 'react-icons/si';

function TechstackP5() {
    const items = [
        {icon: SiP5Dotjs, label: 'P5.js'},
        {icon: SiJavascript, label: 'JavaScript'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackP5;