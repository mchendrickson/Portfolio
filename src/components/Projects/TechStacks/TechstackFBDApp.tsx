import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiCsharp, SiUnity,} from 'react-icons/si';

interface TechstackFBDProps {
    small?: boolean;
}

function TechstackFBDApp({small}: TechstackFBDProps) {
    const items = [
        {icon: SiUnity, label: 'Unity'},
        {icon: SiCsharp, label: 'C#'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items} small={small}/>;
}

export default TechstackFBDApp;