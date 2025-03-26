import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

interface BulletListProps {
    items: React.ReactNode[];
    className?: string;
}

const BulletList: React.FC<BulletListProps> = ({ items, className }) => {
    return (
        <ul className={className || "bullet-list"}>
            {items.map((item, idx) => (
                <li key={idx} className="bullet-item">
                    <VscDebugBreakpointLogUnverified className="bullet-icon" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

export default BulletList;
