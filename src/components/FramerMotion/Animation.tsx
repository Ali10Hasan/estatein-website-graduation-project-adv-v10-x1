import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* =========================================================
    Shared Motion Configuration
========================================================= */

const VIEWPORT = {
    once: true,
    amount: 0.2,
};

const DEFAULT_EASE = "easeOut" as const;

const DEFAULT_TRANSITION = {
    duration: 0.6,
    ease: DEFAULT_EASE,
};

/* =========================================================
    Fade Up
========================================================= */

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: DEFAULT_TRANSITION,
    },
};

interface FadeUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export const FadeUp = ({
    children,
    className = "",
    delay = 0,
}: FadeUpProps) => {
    return (
        <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            transition={{
                ...DEFAULT_TRANSITION,
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* =========================================================
    Stagger Container
========================================================= */

const staggerContainerVariants = {
    hidden: {
        opacity: 1,
    },

    visible: {
        opacity: 1,

        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
}

export const StaggerContainer = ({
    children,
    className = "",
}: StaggerContainerProps) => {
    return (
        <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* =========================================================
    Stagger Item
========================================================= */

const staggerItemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: DEFAULT_EASE,
        },
    },
};

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export const StaggerItem = ({
    children,
    className = "",
}: StaggerItemProps) => {
    return (
        <motion.div
            variants={staggerItemVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* =========================================================
    Typing Text
========================================================= */

const typingContainerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.03,
        },
    },
};

const typingLetterVariants = {
    hidden: {
        opacity: 0,
        y: 8,
    },

    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: DEFAULT_EASE,
        },
    },
};

interface TypingTextProps {
    text: string;
}

export const TypingText = ({
    text,
}: TypingTextProps) => {
    return (
        <motion.span
            variants={typingContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    variants={typingLetterVariants}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};