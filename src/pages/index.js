import * as React from "react"
import { Hero } from "../components/sections/hero"
import Layout from "../components/layout"
import ErinSVG from "../images/erin"
import { Portfolio } from "../components/sections/portfolio"
import { About } from "../components/sections/about"
import { Contact } from "../components/sections/contact"
import { Work } from "../components/sections/work"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Portfolio/>
      <About/>
      <Work/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
