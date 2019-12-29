import React from "react"

import styled from "@emotion/styled"

const Child = styled.h1``

const Parent = styled.div`
  background-color: red;
  ${Child} {
    color: lime;
  }
`

const Index: React.FC = () => {
  return (
    <Parent>
      <Child>Hello World</Child>
    </Parent>
  )
}

export default Index
