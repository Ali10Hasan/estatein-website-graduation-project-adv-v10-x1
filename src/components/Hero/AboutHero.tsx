import Stars from "../AtomComponents/Stars";
import Stats from "../AtomComponents/Stats";
import { TypingText } from "../FramerMotion/Animation";
import type { IAboutHero } from "./data";

const AboutHero = ({ title, description, img }: IAboutHero) => {
    return (
        <section className="flex flex-col-reverse xl:grid xl:grid-cols-2 items-center justify-between w-[95%] xl:max-w-7xl 2xl:max-w-1596 mx-auto px-6 bg-grey-08 sm:relative gap-56 xl:gap-60 2xl:gap-80 mt-50 xl:mt-70 2xl:mt-100 my-50 lg:my-70 xl:my-100 mb-80 xl:mb-120 2xl:mb-150">
            <div className="flex flex-col items-end w-full xl:pt-98 xl:pb-98 2xl:pt-67 2xl:pb-144">
                <div className="w-full text-white xl:max-w-690 2xl:max-w-920 xl:mx-0 mx-auto">
                    <header className="relative xl:max-w-610 2xl:max-w-758 mb-40 xl:mb-50 2xl:mb-80">
                        <Stars />
                        <h1 className="text-[28px] sm:text-[38px] xl:text-[48px] font-semibold leading-[150%] mb-8 xl:mb-10 2xl:mb-14">
                            <TypingText text={title} />
                        </h1>
                        <p className="text-grey-60 font-medium text-sm xl:text-base 2xl:text-lg">
                            {description}
                        </p>
                    </header>

                    <Stats />
                </div>
            </div>

            <div
                className="w-full h-full border border-grey-15 rounded-xl bg-cover bg-center bg-no-repeat max-w-358 sm:max-w-[80%] lg:max-w-full"
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
        </section>
    );
};

export default AboutHero;