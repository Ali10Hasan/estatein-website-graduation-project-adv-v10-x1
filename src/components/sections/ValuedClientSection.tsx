
import type { ClientItem } from '../../types/clientType'
import Container from '../Container'
import SliderSection from '../Slider/SliderSection'
import ValuedClientCard from '../ValuedClientCard'
const valuedClientCards: ClientItem[] = [
    {
        id: "1",
        category: "Luxury Home Development",
        companyName: "ABC Corporation",
        domain: "Commercial Real Estate",
        establishedYear: "Since 2019",
        testimonial: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
        websiteUrl: "#"
    },
    {
        id: "2",
        category: "Commercial Real Estate",
        companyName: "Retail Space",
        domain: "Commercial Real Estate",
        establishedYear: "Since 2018",
        testimonial: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
        websiteUrl: "#"
    },
   {
    id: "4",
    category: "Residential Properties",
    companyName: "Skyline Builders",
    domain: "Property Management",
    establishedYear: "Since 2015",
    testimonial: "Working with Estatein has transformed how we manage our residential portfolio. Their attention to detail and customer care is unmatched.",
    websiteUrl: "#"
  },
  {
    id: "5",
    category: "Sustainable Housing",
    companyName: "EcoLiving Co.",
    domain: "Green Real Estate",
    establishedYear: "Since 2021",
    testimonial: "We were looking for partners who share our vision for sustainable living, and Estatein delivered exactly what we needed to expand our green projects.",
    websiteUrl: "#"
  }
]
const ValuedClientSection = () => {
    return (
        <Container>
            <section className="flex flex-col">
                <SliderSection title='Our Valued Clients'
                    desc="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
                    desktopCards={2} mobileCards={1} tabletCards={2} showButton={false} >
                    {valuedClientCards.map((card, index) => {
                        return (
                            <ValuedClientCard key={index}
                                category={card.category}
                                companyName={card.companyName}
                                domain={card.domain}
                                establishedYear={card.establishedYear}
                                id={card.id}
                                testimonial={card.testimonial}
                            />
                        )
                    })}
                </SliderSection>
            </section>
        </Container>
    )
}

export default ValuedClientSection
