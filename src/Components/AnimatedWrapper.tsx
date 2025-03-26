import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { usePreloader } from "../PreloaderContext";

/**
 * A drop-in replacement for motion.div that waits for the preloader to finish
 */
const AnimatedWrapper: React.FC<HTMLMotionProps<"div">> = (props) => {
    const { preloaderDone } = usePreloader();

    // Don't animate if preloader isn't done
    const animateProp = preloaderDone ? props.animate : undefined;

    return (
        <motion.div {...props} animate={animateProp}>
            {props.children}
        </motion.div>
    );
};

export default AnimatedWrapper;
