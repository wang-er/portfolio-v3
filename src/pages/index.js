import * as React from "react"
import { Hero } from "../components/sections/hero"
import Layout from "../components/layout"
import ErinSVG from "../images/erin"
import { Portfolio } from "../components/sections/portfolio"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Portfolio/>

      <p>hihf</p>
    </Layout>
  )
}

export default IndexPage
