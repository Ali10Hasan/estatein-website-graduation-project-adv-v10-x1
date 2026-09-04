import type { ExperienceCardProps } from '../../types/experinceCardsType'
import Container from '../Container'
import ExperienceCards from '../ExperienceCards'
import HeaderSection from '../HeaderSection'
const stepsCards :ExperienceCardProps [] = [
    {
        step: "step 01",
        title :"Discover a World of Possibilities",
        description : "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
    },
        {
        step: "step 02",
        title :"Narrowing Down Your Choices",
        description : "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
        {
        step: "step 03",
        title :"Personalized Guidance",
        description : "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
        {
        step: "step 04",
        title :"See It for Yourself",
        description : "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
        {
        step: "step 05",
        title :"Making Informed Decisions",
        description : "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
    },
        {
        step: "step 06",
        title :"Getting the Best Deal",
        description : "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    }
]
const ExperienceSection = () => {
  return (
    <Container>
<section className="flex flex-col">
    <HeaderSection 
        title='Navigating the Estatein Experience' 
        description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 pt-40 md:pt-60 lg:pt-80 gap-30">
        {stepsCards.map((card, index) => {
            return (
                <ExperienceCards 
                    key={index} 
                    step={card.step} 
                    title={card.title} 
                    description={card.description} 
                />
            )
        })}
    </div>
</section>
    </Container>
  )
}

export default ExperienceSection
