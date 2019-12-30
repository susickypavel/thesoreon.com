import styled from "@emotion/styled"

import { animated } from "react-spring"
import { Link } from "gatsby"

export const BlogPostCardHeader = styled.h2`
  background: black;
  color: #02d8f3;
  font-size: 2.4rem;
  padding: 0.4em;
  transform: scale(1.1);
`

const AnimatedLink = animated(Link)

export const BlogPostCardWrapper = styled(AnimatedLink)`
  text-decoration: none;
  background-color: gray;
  max-width: 55rem;
  min-height: 150px;
  width: 100%;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
  transform-style: preserve-3d;
  display: flex;

  position: relative;

  @media (max-width: 650px) {
    height: auto;

    ${BlogPostCardHeader} {
      transform: none;
    }
  }
`

export const BlogPostCardBody = styled.div`
  flex-grow: 1;
  margin-right: 32px;
`

export const BlogPostCardDescription = styled.p`
  font-size: 1.6rem;
  padding: 0.8em;
  color: black;
`

export const BlogPostCardInformationBar = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0.8em;
  padding-bottom: 0;
  color: black;
`

export const BlogPostCardInformation = styled.span`
  margin-right: 0.8em;

  & svg {
    vertical-align: top;
  }
`
