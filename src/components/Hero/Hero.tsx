import { useNavigate } from 'react-router-dom';
import Stats from '../AtomComponents/Stats';
import { HERO_DATA } from './data';
import Button from '../AtomComponents/Button';
import { TypingText } from '../FramerMotion/Animation';



const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col-reverse xl:grid xl:grid-cols-2 2xl:gap-80 xl:gap-60 gap-56 items-center justify-between mt-40 xl:mt-0 sm:relative bg-grey-08">
            <div className='flex flex-col items-end xl:pb-98 xl:pt-98 2xl:pt-144 2xl:pb-144 '>
                <div className="text-white 2xl:max-w-920 xl:max-w-690  max-w-[95%] mx-auto xl:mx-0  ">
                    <header className='xl:max-w-610 2xl:max-w-758 '>
                        <h1 className="text-[28px] xl:text-[46px] 2xl:text-[60px] font-semibold leading-[120%]">
                            <TypingText text={HERO_DATA.title} />
                        </h1>
                        <p className="text-grey-60 font-medium text-[14px] xl:text-[16px] 2xl:text-[18px] mt-16 xl:mt-20 2xl:mt-24">{HERO_DATA.description}</p>
                    </header>

                    <div className='mt-40 mb-40 xl:mb-50 xl:mt-50 2xl:mb-60 2xl:mt-60 2xl:gap-20 lg:flex lg:flex-row flex flex-col gap-16'>
                        <Button content='Learn More' className='bg-grey-08 border border-grey-15 hover:bg-purple-60/50 text-white font-medium text-[14px] 2xl:text-[18px] py-14 px-32 xl:px-44 2xl:px-52 2xl:py-18 rounded-lg 2xl:rounded-[10px] transition-all duration-300' />
                        <Button onClick={() => navigate('/properties')} content={'Browse Properties'} className='bg-purple-60 hover:bg-purple-60/50 text-white font-medium text-[14px] 2xl:text-[18px] py-14 px-32 xl:px-20 2xl:px-24 2xl:py-18 rounded-lg 2xl:rounded-[10px] transition-all duration-300' />
                    </div>

                    <Stats />

                </div>
            </div>

            <div className="relative bg-grey-10  h-full bg-cover bg-center bg-no-repeat rounded-xl xl:rounded-none max-w-358 sm:max-w-[80%] lg:max-w-full"
                style={{
                    backgroundImage: `linear-gradient(238.21deg, #2A213F 8.76%, rgba(25,25,25,0) 50.09%), url(/assets/imgs/heros/HeroAbstract.webp)`
                }}
            >
                <img src="/assets/imgs/heros/HeroImage.webp" alt="Modern Building" className="2xl:max-w-920 xl:w-full  h-full" />

                <div className="absolute -bottom-45 2xl:w-175 xl:w-129 xl:top-95 2xl:top-144 xl:translate-x-[-50%] w-117 z-20">
                    <img src="/assets/imgs/heros/CircleHero.webp" alt="Circle" className='animate-spin' style={{ animationDuration: '10s' }} />
                </div>

            </div>
        </section >
    )
}

export default Hero
