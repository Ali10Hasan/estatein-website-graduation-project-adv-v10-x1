import Stars from '../AtomComponents/Stars';
import Stats from '../AtomComponents/Stats';
import { type IAboutHero } from './data';



const AboutHero = ({ title, description, img }: IAboutHero) => {
    return (
        <section className="flex flex-col-reverse xl:grid xl:grid-cols-2 2xl:gap-80 xl:gap-60 gap-56 items-center justify-between sm:relative w-[95%] xl:max-w-7xl 2xl:max-w-1596 mx-auto my-50 lg:my-70 xl:my-100 bg-grey-08 2xl:mt-100 xl:mt-70 mt-50 2xl:mb-150 xl:mb-120 mb:80">
            <div className='flex flex-col items-end xl:pb-98 xl:pt-98 2xl:pt-67 2xl:pb-144 w-full '>
                <div className="text-white 2xl:max-w-920 xl:max-w-690 w-full mx-auto xl:mx-0 ">
                    <header className='relative xl:max-w-610 2xl:max-w-758 mb-40 xl:mb-50 2xl:mb-80'>
                        <Stars />
                        <h1 className="text-white leading-[150%] text-[28px] sm:text-[38px] xl:text-[48px] font-semibold mb-8 xl:mb-10 2xl:mb-14">
                            {title}
                        </h1>
                        <p className="text-grey-60 font-medium text-sm xl:text-base 2xl:text-lg">
                            {description}
                        </p>
                    </header>

                    <Stats />
                </div>
            </div>

            <div className="relative bg-grey-10 h-full bg-cover bg-center bg-no-repeat rounded-xl xl:rounded-none max-w-358 sm:max-w-[80%] lg:max-w-full w-full"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(26, 26, 26, 0.4), rgba(20, 20, 20, 0.8)), url(/assets/imgs/heros/HeroAbstract.webp)`
                }}
            >
                <img src={img} alt="Modern Building" className="2xl:max-w-920 xl:w-full h-full object-cover rounded-2xl" />
            </div>
        </section>
    );
};

export default AboutHero;