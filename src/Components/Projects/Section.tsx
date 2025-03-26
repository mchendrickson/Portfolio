import React from "react";
import AnimatedWrapper from "./../AnimatedWrapper"; // adjust path as needed

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    size?: "large" | "medium" | "small";
}

const Section: React.FC<SectionProps> = ({
                                             title,
                                             children,
                                             className,
                                             size = "medium",
                                         }) => {
    const renderHeading = () => {
        if (!title) return null;

        const headingStyle = "section-heading";

        switch (size) {
            case "large":
                return <h1 style={{fontSize: "4em", paddingBottom: "20px"}} className={headingStyle}>{title}</h1>;
            case "small":
                return <h3 className={headingStyle}>{title}</h3>;
            case "medium":
            default:
                return <h2 className={headingStyle}>{title}</h2>;
        }
    };

    return (
        <AnimatedWrapper
            className={className}
            tag="section"
            staggerChildren
            threshold={0.25}
        >
            {renderHeading()}
            {children}
        </AnimatedWrapper>
    );
};

export default Section;
