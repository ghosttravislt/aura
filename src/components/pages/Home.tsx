import HomepageLayout from "../layouts/HomePageLayout"
import HeroCard from "../molecules/cards/herocard/HeroCard"
import Feature from "../organisms/featurecard/Feature"
const Home = () => {
  return (
        <div className="homepage_contianer">
            <HomepageLayout>
              <HeroCard></HeroCard>
              <Feature/>
            </HomepageLayout>
        </div>
  )
}

export default Home