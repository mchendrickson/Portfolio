import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiCsharp, SiUnity,} from 'react-icons/si';

/**
 * Tech stack display for Imperius project.
 * 
 * @returns {JSX.Element} An IconStack component displaying Imperius project technologies
 */
function TechstackImperius() {
    const items = [
        {icon: SiUnity, label: 'Unity'},
        {icon: SiCsharp, label: 'C#'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackImperius;