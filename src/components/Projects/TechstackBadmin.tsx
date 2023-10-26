import React from 'react';
import IconStack from '../IconStack';
import {
    DiGit,
} from 'react-icons/di';
import {
    SiCsharp,
    SiUnity,
    SiVisualstudio,
} from 'react-icons/si';

interface TechstackBadminProps {
    small?: boolean;
}

function TechstackBadmin({small}: TechstackBadminProps) {
    const items = [
        { icon: SiUnity, label: 'Unity' },
        { icon: SiCsharp, label: 'C#' },
        { icon: DiGit, label: 'Git' },
        { icon: SiVisualstudio, label: 'Visual Studio' },
    ];

    return <IconStack items={items} small={small}/>;
}

export default TechstackBadmin;