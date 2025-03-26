import React from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    size?: "large" | "medium" | "small"; // title size control
}

const Section: React.FC<SectionProps> = ({ title, children, className, size = "medium" }) => {
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
        <section className={className}>
            {renderHeading()}
            {children}
        </section>
    );
};

export default Section;
