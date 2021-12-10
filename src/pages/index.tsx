import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ChampList from "../components/ChampList"
import ListBackground from "../components/ListBackground"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ListBackground />
    <ChampList />
  </Layout>
)

export default IndexPage
