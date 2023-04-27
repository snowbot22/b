import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../assets/css/global.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout
