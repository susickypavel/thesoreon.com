import React from "react"
import { ScrollHolder, ScrollMouse, ScrollScroller } from "./styles"

const ScrollIcon: React.FC = () => {
  return (
    <ScrollHolder>
      <ScrollMouse>
        <ScrollScroller />
      </ScrollMouse>
    </ScrollHolder>
  )
}

export default ScrollIcon
