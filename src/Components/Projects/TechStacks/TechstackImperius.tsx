import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiCsharp, SiPytorch, SiUnity,} from 'react-icons/si';

interface TechstackImperiusProps {
    small?: boolean;
}

function TechstackImperius({small}: TechstackImperiusProps) {
    const items = [
        {icon: SiUnity, label: 'Unity'},
        {icon: SiCsharp, label: 'C#'},
        {icon: DiGit, label: 'Git'},
        {icon: SiPytorch, label: 'Pytorch'},
    ];

    return <IconStack items={items} small={small}/>;
}

export default TechstackImperius;