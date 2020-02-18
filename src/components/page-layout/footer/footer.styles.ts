import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { GoHeart } from "react-icons/go"

const animateHeart = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`

export const FooterHolder = styled.footer`
  background: #212121;
  color: white;
  padding: 1.6em;
`

export const FooterCredits = styled.p`
  font-size: 2.4rem;
  text-align: center;
`

export const HeartIcon = styled(GoHeart)`
  vertical-align: middle;
  background: black;
  border: 1px solid gray;
  padding: 8px;
  margin: 0 10px;
  box-sizing: content-box;
  & path {
    transform-origin: center center;
    animation: ${animateHeart} 2s linear infinite;
  }
`
