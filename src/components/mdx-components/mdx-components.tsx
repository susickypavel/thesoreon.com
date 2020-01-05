import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { FaLink, FaExternalLinkAlt } from "react-icons/fa"
import { slugify } from "~/utils/slugify"

interface HeaderProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  slug: string
}

const headerSizes = {
  h1: "3.6rem",
  h2: "3.2rem",
  h3: "2.8rem",
  h4: "2.4rem",
  h5: "2.0rem",
  h6: "1.6rem",
}

const HEADER_BORDER_WIDTH = 0.3
const HEADER_BORDER_OFFSET = HEADER_BORDER_WIDTH / 2

export const Header: React.FC<HeaderProps> = ({ type, children, slug }) => {
  const fontSize = headerSizes[type]

  const HeaderStyled = styled(type)`
    font-size: ${fontSize};

    padding: 0.8em;
    background-image: linear-gradient(45deg, rgba(189, 0, 240, 1) 0%, rgba(0, 184, 255, 1) 100%);
    box-shadow: 0px 0px 8px black;
    transform: scaleX(1.1);

    @media (max-width: 1024px) {
      transform: scale(1);
    }

    & a {
      margin-left: 0.4em;
      position: relative;

      & svg {
        opacity: 0.5;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: opacity 0.1s linear;

        &:hover {
          opacity: 1;
        }
      }
    }

    &:before {
      content: " ";
      position: absolute;
      top: ${HEADER_BORDER_OFFSET}em;
      left: ${HEADER_BORDER_OFFSET}em;
      width: calc(100% - ${HEADER_BORDER_WIDTH}em);
      height: calc(100% - ${HEADER_BORDER_WIDTH}em);
      background-color: black;
      z-index: -1;
    }
  `
  const id = slugify(children.toString())

  return (
    <HeaderStyled id={id}>
      {children}
      <Link to={`${slug}#${id}`}>
        <FaLink size={`calc(${fontSize} - 0.8rem)`} color="#bdbdbd" />
      </Link>
    </HeaderStyled>
  )
}

export const Paragraph = styled.p`
  line-height: 1.35;
  font-size: 2.2rem;
  margin: 0.8em 0;
`

interface Props {
  href: string
}

export const ExternalLink: React.FC<Props> = ({ href, children }) => {
  const Link = styled.a`
    color: red;
    & svg {
      vertical-align: middle;
      margin-left: 0.3em;
    }
  `

  return (
    <Link href={href}>
      {children}
      <FaExternalLinkAlt />
    </Link>
  )
}

interface ListProps {
  type: "ul" | "ol"
}

export const List: React.FC<ListProps> = ({ type, children }) => {
  const StyledListUnordered = styled("ul")`
    margin: 0.8em 0;
    line-height: 1.35;
    & li {
      &:before {
        content: "\u00AC";
        margin-right: 0.4em;
        font-weight: bold;
      }
    }
  `

  const StyledListOrdered = styled("ol")`
    list-style-type: decimal-leading-zero;
    margin: 0.8em 0;
    line-height: 1.35;
    margin-left: 2.2em;
  `

  const StyledList = type === "ul" ? StyledListUnordered : StyledListOrdered

  return <StyledList>{children}</StyledList>
}

export const BlockQuote = styled.blockquote`
  font-size: 1.4rem;
  font-style: italic;
  margin: 1.6em 0;
  padding: 1.6em;
  border-left: 3px solid white;

  background-color: black;

  & p {
    margin: 0;
  }
`
