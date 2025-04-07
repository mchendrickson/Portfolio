import React from "react";
import IconStack from "../IconStack";
import {DiGit, DiJava, DiJavascript1, DiPython,} from "react-icons/di";
import {SiCsharp, SiPostgresql, SiPytorch, SiTensorflow, SiWebgl,} from "react-icons/si";

function TechStackAll() {
    const items = [
        {icon: DiJava, label: 'Java'},
        {icon: SiCsharp, label: 'C#'},
        {icon: DiPython, label: 'Python'},
        {icon: DiJavascript1, label: 'Javascript'},
        {icon: SiPostgresql, label: 'PostgreSQL'},
        {icon: DiGit, label: 'Git'},
        {icon: SiPytorch, label: 'Pytorch'},
        {icon: SiTensorflow, label: 'Tensorflow'},
        {icon: SiWebgl, label: 'WebGL'},
    ];

    return <IconStack items={items}/>;
}

export default TechStackAll;