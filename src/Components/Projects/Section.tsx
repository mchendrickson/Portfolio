import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {usePreloader} from "../../PreloaderContext";

/**
 * Props interface for the Section component.
 * 
 * @param {string} [title] - Optional section title to display
 * @param {React.ReactNode} children - Content to render within the section
 * @param {string} [className] - Optional CSS class name for custom styling
 * @param {"large" | "medium" | "small"} [size] - Size variant for the section heading
 */
interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    size?: "large" | "medium" | "small";
}

/**
 * Animation variants for the container element.
 * 
 * Controls the stagger timing for child elements to create
 * a cascading animation effect when the section comes into view.
 */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.20,
        },
    },
};

/**
 * Animation variants for individual child elements.
 * 
 * Defines the fade-in and slide-up animation for each
 * child element within the section.
 */
const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

/**
 * Animated section component with intersection observer and preloader integration.
 * 
 * Creates animated sections that trigger when they come into view.
 * Integrates with the preloader context to ensure animations only run after
 * the initial loading is complete. Supports different heading sizes
 * and provides staggered animations for child elements.
 * 
 * @param {SectionProps} props - Component props containing title, children, className, and size
 * @returns {JSX.Element} Animated section with optional heading and staggered child animations
 */
const Section: React.FC<SectionProps> = ({
                                             title,
                                             children,
                                             className,
                                             size = "medium",
                                         }: SectionProps): JSX.Element => {
    const { ref, inView } = useInView({
        rootMargin: '-200px 0px -200px 0px',
        triggerOnce: true,
        threshold: 0.0,
    });
    const { preloaderDone } = usePreloader();
    
    /**
     * Renders the section heading based on the size prop.
     * 
     * Returns different heading elements (h1, h2, h3) with appropriate
     * styling based on the size variant. Returns null if no title is provided.
     * 
     * @returns {JSX.Element | null} The appropriate heading element or null
     */
    const renderHeading = () => {
        if (!title) return null;

        switch (size) {
            case "large":
                return <h1 style={{ fontSize: "4em", paddingBottom: "20px" }} className="heading-text">{title}</h1>;
            case "small":
                return <h3 className="secondary-heading-text">{title}</h3>;
            case "medium":
            default:
                return <h2 style={{ paddingBottom: "20px" }} className="secondary-heading-text">{title}</h2>;
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
