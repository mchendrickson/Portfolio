import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiPython,} from 'react-icons/si';

/**
 * Techn stack display for Corporate Clash project.
 * 
 * @returns {JSX.Element} An IconStack component displaying Corporate Clash project technologies
 */
function TechstackCorporateClash() {
    const items = [
        {icon: SiPython, label: 'Python'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackCorporateClash;