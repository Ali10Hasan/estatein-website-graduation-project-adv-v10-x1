import type { OurAchievementProps } from "../../types/ourAchievementType"
import Container from "../Container"
import HeaderSection from "../HeaderSection"
import OurAchievement from "../OurAchievement"

const achievements: OurAchievementProps[] = [
    {
        title: "3+ Years of Excellence",
        description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience."
    },
    {
        title: "Happy Clients",
        description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
    },
    {
        title: "Industry Recognition",
        description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
    },
]

const OurAchievementSection = () => {
  return (
    <Container>
    <section className="flex flex-col">
      <HeaderSection title="Our Achievements" description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."/>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-40 md:pt-60 lg:pt-80 gap-30">
        {achievements.map((achieve, index) => {
            return <OurAchievement key={index} title={achieve.title}
                description={achieve.description}
            />
        })}
      </div>
    </section>
    </Container>
  )
}

export default OurAchievementSection
