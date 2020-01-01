import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import { FaLink } from "react-icons/fa"

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
    transform: scale(1.1);

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

  return (
    <HeaderStyled id={children.toString()}>
      {children}
      <Link to={`${slug}#${children.toString()}`}>
        <FaLink size={`calc(${fontSize} - 0.8rem)`} color="#bdbdbd" />
      </Link>
    </HeaderStyled>
  )
}

export const Paragraph = styled.p`
  line-height: 1.35;
  font-size: 2.2rem;
  margin: 0.8em 0;

  &:first-of-type {
    margin-top: 0;
  }
`
