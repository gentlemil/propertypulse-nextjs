import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'
import FeaturedProperties from '@/components/FeaturedProperties'
import HomeProperties from '@/components/HomeProperties'
import BecauseYouFollow from '@/components/BecauseYouFollow'

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
      <BecauseYouFollow />
    </>
  )
}

export default HomePage
