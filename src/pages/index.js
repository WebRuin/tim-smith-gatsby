import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import WhyHireMe from "../components/WhyHireMe"
import Pricing from "../components/Pricing"
import RecentWork from "../components/RecentWork"
import Accolades from "../components/Accolades"

import "../scss/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WhyHireMe />
    <Pricing />
    <RecentWork />
    <Accolades />
  </Layout>
)

export default IndexPage
