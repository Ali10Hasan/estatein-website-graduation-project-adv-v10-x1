import Container from "../Container";
import { TypingText } from "../FramerMotion/Animation";
import type { IPageHero } from "./data";

const PageHero = ({ title, description, className = "" }: IPageHero) => {
    return (
        <section
            className={`border-b border-grey-15 bg-[linear-gradient(95.93deg,#262626_-1.82%,rgba(38,38,38,0)_40.46%)] flex items-center ${className}`}
        >
            <Container className="py-50 md:pt-100 md:pb-100! lg:pt-150">
                <div className="mx-auto flex flex-col items-center">
                    <div className="">
                        <h1 className="text-white text-[28px] xl:text-[38px] 2xl:text-[48px] font-semibold leading-[150%] mb-10 2xl:mb-14">
                            <TypingText text={title} />

                        </h1>
                        <p className="text-grey-60 font-medium text-[14px] xl:text-[16px] 2xl:text-[18px]">
                            {description}
                        </p>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default PageHero;