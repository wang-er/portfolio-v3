import * as React from "react"
import { Hero } from "../components/sections/hero"
import Layout from "../components/layout"
import ErinSVG from "../images/erin"
import { Portfolio } from "../components/sections/portfolio"
import { About } from "../components/sections/about"
import { Contact } from "../components/sections/contact"
import { Work } from "../components/sections/work"
import "../styles/typography.css"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Portfolio/>
      <About/>
      <Work jobs={[1, 2, 3 ,4]}/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
