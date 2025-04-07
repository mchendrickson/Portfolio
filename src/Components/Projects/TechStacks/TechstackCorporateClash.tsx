import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiPython,} from 'react-icons/si';

function TechstackCorporateClash() {
    const items = [
        {icon: SiPython, label: 'Python'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackCorporateClash;