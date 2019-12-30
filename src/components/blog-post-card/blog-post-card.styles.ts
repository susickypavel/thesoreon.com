import styled from "@emotion/styled"

import { animated } from "react-spring"

export const BlogPostCardHeader = styled.h2`
  background: black;
  color: #02d8f3;
  font-size: 2.4rem;
  padding: 0.4em;
`

export const BlogPostCardWrapper = styled(animated.div)`
  background-color: gray;
  max-width: 50rem;
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

export const BlogPostCardBody = styled.div``

export const BlogPostCardDescription = styled.p`
  font-size: 1.6rem;
  padding: 0.8em;
`

export const BlogPostCardInformationBar = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0.8em;
  padding-bottom: 0;
`

export const BlogPostCardInformation = styled.span`
  margin-right: 0.8em;

  & svg {
    vertical-align: top;
  }
`
