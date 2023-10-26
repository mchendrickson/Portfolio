import React from "react";
import IconStack from "../IconStack";
import {
    DiJavascript1,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiPytorch,
    SiCsharp,
    SiPostgresql,
    SiTensorflow,
    SiWebgl,
    SiCplusplus,
} from "react-icons/si";

interface TechstackProps {
    small?: boolean;
}

function TechStackAll({small}: TechstackProps) {
    const items = [
        { icon: DiJava, label: 'Java' },
        { icon: SiCsharp, label: 'C#' },
        { icon: DiPython, label: 'Python' },
        { icon: DiJavascript1, label: 'Javascript' },
        { icon: SiPostgresql, label: 'PostgreSQL' },
        { icon: DiGit, label: 'Git' },
        { icon: SiCplusplus, label: 'C++' },
        { icon: SiPytorch, label: 'Pytorch' },
        { icon: SiTensorflow, label: 'Tensorflow' },
        { icon: SiWebgl, label: 'WebGL' },
    ];

    return <IconStack items={items} small={small} />;
}

export default TechStackAll;