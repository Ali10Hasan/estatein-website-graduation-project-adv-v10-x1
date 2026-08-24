import type { IPageHero } from "./data";

const PageHero = ({ title, description, className = "" }: IPageHero) => {
    return (
        <section
            className={`border-b border-grey-15 bg-[linear-gradient(95.93deg,#262626_-1.82%,rgba(38,38,38,0)_40.46%)] flex items-center ${className}`}
        >
            <div className="max-w-1596 2xl:ml-162 xl:ml-80 mx-auto  flex flex-col items-center">
                <div className="2xl:max-w-1358 xl:max-w-1160 max-w-358 sm:max-w-[90%]">
                    <h1 className="text-white text-[28px] xl:text-[38px] 2xl:text-[48px] font-semibold leading-[150%] mb-10 2xl:mb-14">
                        {title}
                    </h1>
                    <p className="text-grey-60 font-medium text-[14px] xl:text-[16px] 2xl:text-[18px]">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PageHero;