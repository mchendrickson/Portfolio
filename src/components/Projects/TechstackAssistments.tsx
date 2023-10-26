import React from 'react';
import IconStack from '../IconStack';
import {
    DiGit,
} from 'react-icons/di';
import {
    SiPython,
    SiPytorch,
    SiTensorflow,
    SiPostgresql,
} from 'react-icons/si';

interface TechstackAssistmentsProps {
    small?: boolean;
}

function TechstackAssistments({small}: TechstackAssistmentsProps) {
    const items = [
        { icon: SiPython, label: 'Python' },
        { icon: SiPostgresql, label: 'PostgreSQL' },
        { icon: SiPytorch, label: 'Pytorch' },
        { icon: SiTensorflow, label: 'Tensorflow' },
        { icon: DiGit, label: 'Git' },
    ];

    return <IconStack items={items} small={small} />;
}

export default TechstackAssistments;