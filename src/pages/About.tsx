import AboutHero from "../components/Hero/AboutHero"

const About = () => {
    return (
        <div>
            <AboutHero
                title={"Our Journey"}
                description={"Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."}
                img={"/assets/imgs/heros/AboutHeroImage.webp"} />
        </div>
    )
}

export default About