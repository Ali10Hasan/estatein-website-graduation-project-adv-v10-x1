import Stars from "../AtomComponents/Stars";
import Stats from "../AtomComponents/Stats";
import { FadeRight, FadeUp, TypingText } from "../FramerMotion/Animation";
import type { IAboutHero } from "./data";
import { motion } from "framer-motion"

const AboutHero = ({ title, description, img }: IAboutHero) => {
    return (
        <section className="flex flex-col-reverse xl:grid xl:grid-cols-2 items-center justify-between xl:max-w-1296 2xl:max-w-1612 mx-auto px-16 bg-grey-08 light:bg-white-99 sm:relative gap-56 xl:gap-60 2xl:gap-80 mt-50 xl:mt-70 2xl:mt-100 my-50 lg:my-70 xl:my-100 mb-80 xl:mb-120 2xl:mb-150">
            <div className="flex flex-col items-end w-full xl:pt-98 xl:pb-98 2xl:pt-67 2xl:pb-144">
                <div className="w-full text-white light:text-grey-08 xl:max-w-690 2xl:max-w-920 xl:mx-0 mx-auto">
                    <header className="relative xl:max-w-610 2xl:max-w-758 mb-40 xl:mb-50 2xl:mb-80">
                        <Stars />
                        <h1 className="text-[28px] sm:text-[38px] xl:text-[48px] font-semibold leading-[150%] mb-8 xl:mb-10 2xl:mb-14">
                            <TypingText text={title} />
                        </h1>
                        <FadeUp delay={0.9} duration={0.7}>
                            <p className="text-grey-60 font-medium text-sm xl:text-base 2xl:text-lg">
                                {description}
                            </p>
                        </FadeUp>
                    </header>
                    <motion.div initial={{ opacity: 0, y: 30, }} animate={{ opacity: 1, y: 0, }} transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1], }} >
                        <Stats />
                    </motion.div>
                </div>
            </div>
            <FadeRight delay={0.3} duration={0.9}>

                <div
                    className="w-full h-full border border-grey-15 light:border-white-90 rounded-xl bg-cover bg-center bg-no-repeat max-w-358 sm:max-w-[80%] lg:max-w-full"
                    style={{
                        backgroundImage: "url(/assets/imgs/heros/HeroAbstract.webp)",
                    }}
                >
                    <img
                        src={img}
                        alt="Modern luxury residential building"
                        className="w-full h-full xl:max-w-920 object-cover rounded-2xl"
                    />
                </div>
            </FadeRight>

        </section>
    );
};

export default AboutHero;