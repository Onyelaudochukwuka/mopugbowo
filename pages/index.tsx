import type { NextPage } from 'next'
import { About, Contact, Cta, Hero, Sermons, Card } from "../components"
import Gallery from "../components/Gallery"
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Sermons />
      <Gallery />
      <About />
      <Contact />
      <Cta/>
    </div>
    )
}

export default Home
