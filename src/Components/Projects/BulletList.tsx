import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

/**
 * Props interface for the BulletList component.
 * 
 * @param {React.ReactNode[]} items - Array of content items to display as bullet points
 * @param {string} [className] - Optional CSS class name for custom styling
 */
interface BulletListProps {
    items: React.ReactNode[];
    className?: string;
}

/**
 * Renders a styled bullet list with custom icons.
 * 
 * @param {BulletListProps} props - Component props containing items and optional className
 * @returns {JSX.Element} Styled bullet list with custom icons
 */
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
