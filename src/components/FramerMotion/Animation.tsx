import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BaseProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
}

/* Fade Up */
export const FadeUp = ({ children, className = "", delay = 0, duration = 0.6, once = true, }: BaseProps) => (
    <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once }} transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}>
        {children}
    </motion.div>
);

/* Fade Left */
export const FadeLeft = ({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    once = true,
}: BaseProps) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

/* Fade Right */
export const FadeRight = ({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    once = true,
}: BaseProps) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

/* Scale In */
export const ScaleIn = ({
    children,
    className = "",
    delay = 0,
    duration = 0.7,
    once = true,
}: BaseProps) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

/* Stagger Container */
interface StaggerProps {
    children: ReactNode;
    className?: string;
    stagger?: number;
    delay?: number;
    once?: boolean;
}

export const StaggerContainer = ({
    children,
    className = "",
    stagger = 0.12,
    delay = 0,
    once = true,
}: StaggerProps) => (
    <motion.div
        className={className}
        variants={{
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: stagger,
                    delayChildren: delay,
                },
            },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => (
    <motion.div
        className={className}
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                },
            },
        }}
    >
        {children}
    </motion.div>
);


/* Typing Text */
interface TypingProps {
    text: string;
    className?: string;
}

export const TypingText = ({ text, className = "" }: TypingProps) => (
    <motion.span
        className={className}
        variants={{
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.035,
                },
            },
        }}
        initial="hidden"
        animate="visible"
    >
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
            >
                {char}
            </motion.span>
        ))}
    </motion.span>
);

/* Welcome Fade */
export const WelcomeFade = ({
    children,
    className = "",
    delay = 0,
}: BaseProps) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
        }}
    >
        {children}
    </motion.div>
);