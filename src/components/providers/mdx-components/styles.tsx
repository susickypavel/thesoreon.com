import React from "react"
import styled from "~/utils/styled"

interface Props {
  listType: "ul" | "ol"
}

export const List: React.FC<Props> = ({ listType, children }) => {
  const ListElement = styled(listType)`
    font-size: 2rem;
    list-style-type: ${listType === "ul" ? "disc" : "decimal"};
    padding-left: 24px;
    margin: 8px 0;
    & li {
      line-height: 1.5;
    }
  `

  return <ListElement>{children}</ListElement>
}

export const Paragraph = styled.p`
  font-size: 2.4rem;
  line-height: 1.3;

  margin: 0.8em 0;
`

const headingSizes = {
  h1: "3.6rem",
  h2: "3rem",
  h3: "2.4rem",
  h4: "1.8rem",
  h5: "1.2rem",
  h6: "0.6rem",
}

export const Heading: React.FC<{
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  fontSize: number
}> = ({ heading, children }) => {
  const HeadingComponent = styled(heading)`
    margin: 32px 0;
    font-size: ${headingSizes[heading]};
  `

  return <HeadingComponent>{children}</HeadingComponent>
}

export const Blockquote = styled.blockquote`
  & p {
    margin: 0;
  }

  margin: 1.6em 0;
`

export const Image = styled.img``

export const Code = styled.code`
  font-size: 1.6rem;
`
