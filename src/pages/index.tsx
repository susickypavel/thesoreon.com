import React from "react"

import Layout from "~/components/Layout"

interface Props {
  location: Location
}

const Index: React.FC<Props> = ({ location }) => {
  return (
    <Layout
      title="Home"
      metaData={{
        pathname: location.pathname,
        customType: "article",
      }}
    >
      <h1>Hello World</h1>
    </Layout>
  )
}

export default Index
