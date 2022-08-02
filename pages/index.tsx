import type { NextPage } from 'next'
import { Hero, Sermons } from "../components"
const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Sermons />
    </div>
    )
}

export default Home
