import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiPython,} from 'react-icons/si';

interface TechstackCorporateClashProps {
    small?: boolean;
}

function TechstackCorporateClash({small}: TechstackCorporateClashProps) {
    const items = [
        {icon: SiPython, label: 'Python'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items} small={small}/>;
}

export default TechstackCorporateClash;