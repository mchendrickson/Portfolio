// AnimatedWrapper.tsx
import React, { ReactNode } from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { usePreloader } from "../PreloaderContext";

interface AnimatedWrapperProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    tag?: keyof JSX.IntrinsicElements; // allows switching between div/section/etc
    variants?: Variants;
    staggerChildren?: boolean;
    triggerOnce?: boolean;
    threshold?: number;
}

const defaultContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const defaultChildVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
};

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
                                                             children,
                                                             tag = "div",
                                                             variants,
                                                             staggerChildren = false,
                                                             triggerOnce = true,
                                                             threshold = 0.2,
                                                             ...rest
                                                         }) => {
    const { preloaderDone } = usePreloader();
    const { ref, inView } = useInView({ triggerOnce, threshold });

    // @ts-ignore
    const MotionTag = motion[tag]; // dynamically renders motion.div or motion.section

    return (
        <MotionTag
            ref={ref}
            variants={staggerChildren ? (variants || defaultContainerVariants) : undefined}
            initial="hidden"
            animate={preloaderDone && inView ? "visible" : "hidden"}
            {...rest}
        >
            {
                staggerChildren
                    ? React.Children.map(children, (child) => (
                        <motion.div variants={defaultChildVariants}>
                            {child}
                        </motion.div>
                    ))
                    : children
            }
        </MotionTag>
    );
};

export default AnimatedWrapper;
