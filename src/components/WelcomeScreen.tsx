import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WelcomeFade } from "./FramerMotion/Animation";

interface WelcomeScreenProps {
    onFinish: () => void;
}

const WelcomeScreen = ({ onFinish }: WelcomeScreenProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let value = 0;

        const interval = setInterval(() => {
            value += 1;
            setProgress(value);

            if (value >= 100) {
                clearInterval(interval);
                sessionStorage.setItem("estatein welcome", "true");
                onFinish();
            }
        }, 30);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-grey-08 text-white flex items-center justify-center">

            <div className="absolute w-500 h-500 rounded-full bg-purple-60/30 blur-[130px]" />

            <div className="relative w-full max-w-450 2xl:max-w-550 px-30 flex flex-col items-center text-center">

                <WelcomeFade delay={0}>
                    <img
                        src="/assets/imgs/EstateinLogo.webp"
                        alt="EstateIn Logo"
                        className="w-100"
                    />
                </WelcomeFade>

                <WelcomeFade delay={0.35}>
                    <h1 className="mt-12 text-3xl md:text-4xl font-bold tracking-tight">
                        Welcome to Estate
                        <span className="text-purple-60">In</span>
                    </h1>
                </WelcomeFade>

                <WelcomeFade delay={0.6}>
                    <p className="mt-3 text-[10px] md:text-base text-grey-60 uppercase tracking-[3px]">
                        Find Your Dream Property
                    </p>
                </WelcomeFade>

                <WelcomeFade delay={0.9} className="w-full mt-14">

                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-[3px] text-grey-60">
                            Loading
                        </span>

                        <span className="text-xs font-medium text-purple-60 tabular-nums">
                            {progress}%
                        </span>
                    </div>

                    <div className="relative h-5 w-full bg-white/10 rounded-full">
                        <motion.div
                            className="absolute left-0 top-0 h-full rounded-full bg-purple-60"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{
                                duration: 0.05,
                                ease: "linear",
                            }}
                        />
                    </div>

                    <p className="mt-15 text-[11px] text-grey-60 tracking-wide">
                        Discover Your Dream Property
                    </p>

                </WelcomeFade>

            </div>
        </div>
    );
};

export default WelcomeScreen;