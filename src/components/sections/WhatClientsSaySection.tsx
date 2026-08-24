import { useSelector } from "react-redux"
import Container from "../Container"
import SliderSection from "../Slider/SliderSection"
import ClientRateCards from "../ClientRateCards"
import Loading from "../Loading"
import Error from "../Error"
import type { RootState } from "../../redux/store/store"

const WhatClientsSaySection = () => {
  const { items, loading, error } = useSelector((state: RootState) => state.testimonials)

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  return (
    <Container>
      <section className="flex flex-col w-full 2xl:max-w-1596 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-640 max-w-358 2xl:my-150 xl:my-120 my-80">
        <SliderSection
        title="What Our Clients Say"
        desc="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        buttonContent="View All Testimonials"
        buttonClassName="bg-grey-15 text-white "
        showButton
      >
        {items.map((item) => (
          <ClientRateCards key={item.id} {...item} />
        ))}
      </SliderSection>
      </section>
    </Container>
  )
}

export default WhatClientsSaySection