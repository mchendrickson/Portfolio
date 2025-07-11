import React from "react";
import IconStack from "../IconStack";
import {SiAdobephotoshop, SiBlender, SiJetbrains, SiMicrosoftoffice, SiUnity,} from "react-icons/si";

/**
 * IconStack instance of every tool used overall.
 * 
 * @returns {JSX.Element} Grid of tool icons with labels
 */
function ToolStack() {
    const items = [
        {icon: SiUnity, label: 'Unity'},
        {icon: SiJetbrains, label: 'JetBrains'},
        {icon: SiMicrosoftoffice, label: 'Microsoft Office'},
        {icon: SiAdobephotoshop, label: 'Photoshop'},
        {icon: SiBlender, label: 'Blender'},
    ];

    return <IconStack items={items}/>;
}

export default ToolStack;