import type { NextPage } from 'next'
import { About, Contact, Hero, Sermons } from "../components"
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Sermons />
      <About />
      <Contact />
    </div>
    )
}

export default Home
