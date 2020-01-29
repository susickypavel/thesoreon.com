import React, { useEffect, useRef } from "react"
import { TimelineLite } from "gsap/dist/gsap"

import { MenuHolder } from "./menu.styles"

interface Props {
  toggled: boolean
}

export const Menu: React.FC<Props> = ({ toggled }) => {
  const menuTimeLine = useRef<TimelineLite>()

  const menuHolderRef = useRef<HTMLDivElement>()

  useEffect(() => {
    menuTimeLine.current = new TimelineLite().to(menuHolderRef.current, {
      transform: "scale(1)",
      duration: 1,
      ease: "power4",
    })
  }, [])

  useEffect(() => {
    if (toggled) {
      menuTimeLine.current.play()
    } else {
      menuTimeLine.current.reverse()
    }
  }, [toggled])

  return (
    <MenuHolder ref={menuHolderRef}>
      <h1>Hello World</h1>
    </MenuHolder>
  )
}
