import styled from "@emotion/styled"

import { animated } from "react-spring"
import { Link } from "gatsby"

const BPCH_BORDER_WIDTH = 0.3
const BPCH_BORDER_OFFSET = BPCH_BORDER_WIDTH / 2

export const BlogPostCardHeader = styled.h2`
  background-image: linear-gradient(45deg, rgba(189, 0, 240, 1) 0%, rgba(0, 184, 255, 1) 100%);
  color: #02d8f3;
  font-size: 2.4rem;
  padding: 0.6em;
  transform: scale(1.1) translateY(-0.6em);
  position: relative;

  &:before {
    content: " ";
    position: absolute;
    top: ${BPCH_BORDER_OFFSET}em;
    left: ${BPCH_BORDER_OFFSET}em;
    width: calc(100% - ${BPCH_BORDER_WIDTH}em);
    height: calc(100% - ${BPCH_BORDER_WIDTH}em);
    background-color: black;
    z-index: -1;
  }
`

export const BlogPostCardBody = styled.div`
  flex-grow: 1;
  margin-right: 32px;
`

export const BlogPostCardInformationBar = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0 0.8em;
  color: white;
  text-shadow: 0px 0px 2px black;
`

const AnimatedLink = animated(Link)

export const BlogPostCardWrapper = styled(AnimatedLink)`
  text-decoration: none;
  background-color: #212121;
  max-width: 55rem;
  min-height: 150px;
  width: 100%;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 3.2em;
  transform-style: preserve-3d;
  display: flex;

  position: relative;

  @media (max-width: 650px) {
    height: auto;
    flex-flow: column-reverse wrap;

    ${BlogPostCardHeader} {
      transform: scale(1);
    }

    ${BlogPostCardBody} {
      margin-right: 0;

      ${BlogPostCardInformationBar} {
        padding-top: 0.8em;
      }
    }
  }
`

export const BlogPostCardDescription = styled.p`
  font-size: 1.6rem;
  padding: 0.8em;
  color: white;
  text-shadow: 0px 0px 2px black;
`

export const BlogPostCardInformation = styled.span`
  margin-right: 0.8em;

  & svg {
    vertical-align: top;
  }
`
