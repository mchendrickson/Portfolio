import React from "react";
import { motion } from "framer-motion";

interface FancyTextProps {
    text: string;
    mode?: "staggered" | "wave" | "letters";
    className?: string;
}

// Utility for random float
const rand = (min: number, max: number) => Math.random() * (max - min) + min;

// Variants
const letterVariants = {
    hidden: () => ({
        opacity: 0,
        y: rand(-10, 10),
        rotate: rand(-10, 10),
    }),
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 30,
        }
    }
};

const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

const FancyText: React.FC<FancyTextProps> = ({ text, mode = "staggered", className }) => {
    const isLetterMode = mode === "letters";
    const isWave = mode === "wave";

    const parts = isLetterMode ? text.split("") : text.split(" ");

    return (
        <motion.div
            className={className}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.03,
                    },
                },
            }}
        >
            {parts.map((part, i) => (
                <motion.span
                    key={i}
                    variants={isLetterMode ? letterVariants : wordVariants}
                    transition={
                        isWave
                            ? { delay: Math.sin(i * 0.5) * 0.25 + 0.35 }
                            : undefined
                    }
                >
                    {part}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default FancyText;
