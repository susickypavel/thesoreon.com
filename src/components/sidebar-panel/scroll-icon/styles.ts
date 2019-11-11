import { keyframes } from "@emotion/core"

import styled from "@emotion/styled"
import { LAYOUT_MEDIA_QUERY_TABLET } from "~/css/constants"

export const ScrollHolder = styled.div`
  display: none;

  @media (max-width: ${LAYOUT_MEDIA_QUERY_TABLET}) {
    display: block;
  }

  width: 35px;
  height: 55px;

  margin: 8px auto;
`

export const ScrollMouse = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 25px;
  opacity: 0.75;
`

const scrollAnimation = keyframes({
  "0%": {
    opacity: 0,
  },
  "10%": {
    transform: "translateY(0)",
    opacity: 1,
  },
  "100%": {
    transform: "translateY(15px)",
    opacity: 0,
  },
})

export const ScrollScroller = styled.div`
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 10px;

  animation: ${scrollAnimation} 2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite;
`
