import Head from "next/head"
import React, {FC} from "react"
import {BlitzLayout} from "@blitzjs/next"

const Layout: BlitzLayout<{title?: string | undefined; children?: React.ReactNode}> = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title || "eventio"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  )
}

export default Layout
