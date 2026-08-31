import { useSelector } from "react-redux"
import Container from "../Container"
import SliderSection from "../Slider/SliderSection"
import ClientRateCards from "../ClientRateCards"
import Error from "../Error"
import type { RootState } from "../../redux/store/store"
import CardSkeleton from "../CardSkeleton"
import { SkeletonTheme } from "react-loading-skeleton"

const WhatClientsSaySection = () => {
  const { items, loading, error } = useSelector((state: RootState) => state.testimonials)

  if (error) return <Error message={error} />

  return (
    <Container>
      <section className="flex flex-col w-full">
        <SkeletonTheme
          baseColor="#1A1A1A"
          highlightColor="#262626"
        >
          <SliderSection
            title="What Our Clients Say"
            desc="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            buttonContent="View All Testimonials"
            showButton
          >
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <CardSkeleton key={index} variant="review" />
              ))
            ) : (
              items.map((item) => (
                <ClientRateCards key={item.id} {...item} />
              ))
            )}
          </SliderSection>
        </SkeletonTheme>
      </section>
    </Container>
  )
}

export default WhatClientsSaySection