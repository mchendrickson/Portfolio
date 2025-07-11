import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiCsharp, SiUnity,} from 'react-icons/si';

/**
 * Tech stack display for Badmin project.
 * 
 * @returns {JSX.Element} An IconStack component displaying Badmin project technologies
 */
function TechstackBadmin() {
    const items = [
        {icon: SiUnity, label: 'Unity'},
        {icon: SiCsharp, label: 'C#'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackBadmin;