import React from "react";
import IconStack from "../IconStack";
import {SiAdobephotoshop, SiBlender, SiJetbrains, SiMicrosoftoffice, SiUnity,} from "react-icons/si";

interface ToolstackProps {
    small?: boolean;
}

function ToolStack({small}: ToolstackProps) {
    const items = [
        {icon: SiUnity, label: 'Unity'},
        {icon: SiJetbrains, label: 'JetBrains'},
        {icon: SiMicrosoftoffice, label: 'Microsoft Office'},
        {icon: SiAdobephotoshop, label: 'Photoshop'},
        {icon: SiBlender, label: 'Blender'},
    ];

    return <IconStack items={items} small={small}/>;
}

export default ToolStack;