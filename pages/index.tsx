import type { NextPage } from 'next'
import { About, Hero, Sermons } from "../components"
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Sermons />
      <About/>
    </div>
    )
}

export default Home
