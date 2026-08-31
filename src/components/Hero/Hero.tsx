import { useNavigate } from 'react-router-dom';
import Stats from '../AtomComponents/Stats';
import { HERO_DATA } from './data';
import Button from '../AtomComponents/Button';
import { TypingText } from '../FramerMotion/Animation';



const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="mx-auto w-full flex justify-center 2xl:max-w-1920 xl:gap-60 2xl:gap-80 2xl:pl-162 xl:pl-80 xl:flex-row flex-col-reverse px-16 lg:px-0 mt-40 xl:mt-0">
            <div className='w-full 2xl:max-w-758 xl:max-w-690 flex flex-col justify-center '>

                <div className='2xl:max-w-920 xl:max-w-610 mx-auto xl:mx-0'>
                    <header className='text-white light:text-grey-08 2xl:max-w-920 xl:max-w-610 mx-auto xl:mx-0'>
                        <h1 className="text-[28px] xl:text-[46px] 2xl:text-[60px] font-semibold leading-[120%] light:text-grey-08">
                            <TypingText text={HERO_DATA.title} />
                        </h1>
                        <p className="text-grey-60 font-medium text-[14px] xl:text-[16px] 2xl:text-[18px] mt-16 xl:mt-20 2xl:mt-24 light:text-grey-40">{HERO_DATA.description}</p>
                    </header>

                    <div className='mt-40 mb-40 xl:mb-50 xl:mt-50 2xl:mb-60 2xl:mt-60 2xl:gap-20 lg:flex lg:flex-row flex flex-col gap-16'>
                        <Button content='Learn More' className='bg-grey-08 light:bg-white-99 border border-grey-15 light:border-white-90 hover:bg-purple-60/50 text-white light:text-grey-08 font-medium text-[14px] 2xl:text-[18px] py-14 px-32 xl:px-44 2xl:px-52 2xl:py-18 rounded-lg 2xl:rounded-[10px] transition-all duration-300' />
                        <Button onClick={() => navigate('/properties')} content={'Browse Properties'} className='bg-purple-60 hover:bg-purple-60/50 text-white light:text-grey-08 font-medium text-[14px] 2xl:text-[18px] py-14 px-32 xl:px-20 2xl:px-24 2xl:py-18 rounded-lg 2xl:rounded-[10px] transition-all duration-300' />
                    </div>

                    <Stats />
                </div>
            </div>

            <div className="relative 2xl:max-w-920 bg-grey-10 light:bg-white-97 xl:max-w-690 rounded-xl border border-grey-15 light:border-white-90 mb-56 xl:mb-0 lg:rounded-none lg:border-0
                            bg-[linear-gradient(238.21deg,#2A213F_8.76%,rgba(25,25,25,0)_50.09%),url('/assets/imgs/heros/HeroAbstract.webp')]
                            light:bg-[linear-gradient(238.21deg,#E4E4E7_8.76%,rgba(255,255,255,0)_50.09%),url('/assets/imgs/heros/HeroAbstract.webp')]"

            >
                <img src="/assets/imgs/heros/HeroImage.webp" alt="Modern Building" className="w-full" />

                <div className="absolute z-50 -bottom-45 2xl:w-175 xl:w-129 xl:top-95 2xl:top-144 xl:translate-x-[-50%] w-117">
                    <img src="/assets/imgs/heros/CircleHero.webp" alt="Circle" className='animate-spin ' style={{ animationDuration: '10s' }} />
                </div>

            </div>

        </section>
    )
}

export default Hero