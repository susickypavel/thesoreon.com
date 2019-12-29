import styled from "@emotion/styled"

import { animated } from "react-spring"

export const BlogPostCardHeader = styled.h2`
  background: black;
  color: #02d8f3;
  transform: scale(1.1);
  font-size: 2.4rem;
  padding: 0.4em;
`

export const BlogPostCardWrapper = styled(animated.div)`
  background-color: #f8ee03;
  max-width: 500px;
  width: 100%;
  height: 250px;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  margin: 32px;
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
  transform: translateZ(10px);
  padding: 1.6em;
`
