import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {usePreloader} from "../../PreloaderContext";

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    size?: "large" | "medium" | "small";
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const Section: React.FC<SectionProps> = ({
                                             title,
                                             children,
                                             className,
                                             size = "medium",
                                         }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const { preloaderDone } = usePreloader();
    const renderHeading = () => {
        if (!title) return null;

        const headingStyle = "section-heading";

        switch (size) {
            case "large":
                return <h1 style={{ fontSize: "4em", paddingBottom: "20px" }} className={headingStyle}>{title}</h1>;
            case "small":
                return <h3 className={headingStyle}>{title}</h3>;
            case "medium":
            default:
                return <h2 className={headingStyle}>{title}</h2>;
        }
    };

    return (
        <motion.section
            className={className}
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView && preloaderDone ? "visible" : "hidden"}
        >
            {renderHeading()}
            {
                // Wrap each direct child with motion.div for individual fade-in
                React.Children.map(children, (child) =>
                    <motion.div variants={childVariants}>
                        {child as ReactElement}
                    </motion.div>
                )
            }
        </motion.section>
    );
};

export default Section;
