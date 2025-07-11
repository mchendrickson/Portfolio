import React from 'react';
import IconStack from '../../IconStack';
import {DiGit,} from 'react-icons/di';
import {SiPostgresql, SiPython, SiPytorch, SiTensorflow,} from 'react-icons/si';

/**
 * Tech stack display for ASSISTments project.
 * 
 * @returns {JSX.Element} An IconStack component displaying ASSISTments project technologies
 */
function TechstackAssistments() {
    const items = [
        {icon: SiPython, label: 'Python'},
        {icon: SiPostgresql, label: 'PostgreSQL'},
        {icon: SiPytorch, label: 'Pytorch'},
        {icon: SiTensorflow, label: 'Tensorflow'},
        {icon: DiGit, label: 'Git'},
    ];

    return <IconStack items={items}/>;
}

export default TechstackAssistments;