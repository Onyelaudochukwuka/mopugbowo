import type { NextPage } from 'next'
import { About, Contact, Cta, Hero, Sermons } from "../components"
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Sermons />
      <About />
      <Contact />
      <Cta/>
    </div>
    )
}

export default Home
