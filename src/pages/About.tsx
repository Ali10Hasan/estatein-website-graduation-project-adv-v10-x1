
import AboutHero from "../components/Hero/AboutHero"
import ExperienceSection from "../components/sections/ExperienceSection";
import OurAchievementSection from "../components/sections/OurAchievementSection";
import OurTeamSection from "../components/sections/OurTeamSection";
import OurValuesSection from "../components/sections/OurValuesSection";
import ValuedClientSection from "../components/sections/ValuedClientSection";




const About = () => {
    return (
        <div>
            <AboutHero
                title={"Our Journey"}
                description={"Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."}
                img={"/assets/imgs/heros/AboutHeroImage.webp"} />
            <main>
            <OurValuesSection/>
            <OurAchievementSection/>
            <ExperienceSection/>
            <OurTeamSection />
            <ValuedClientSection/>
            </main>
        </div>
    )
}


export default About;