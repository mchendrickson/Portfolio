import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { usePreloader } from "../PreloaderContext";

/**
 * A drop-in replacement for motion.div that waits for the preloader to finish.
 * 
 * Wraps framer-motion's motion.div and conditionally applies
 * animations based on the preloader state. It prevents animations from running
 * while the preloader is active, ensuring smooth transitions and preventing
 * animation conflicts during the initial loading phase.
 * 
 * @param {HTMLMotionProps<"div">} props - All standard motion.div props
 * @returns {JSX.Element} A motion.div with conditional animation based on preloader state
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
