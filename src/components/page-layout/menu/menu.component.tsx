import React, { useEffect, useRef } from "react"
import { TimelineLite } from "gsap/dist/gsap"

import { MenuHolder } from "./menu.styles"
import MenuLink, { LinkProps } from "./menu-link/menu-link.component"

interface Props {
  toggled: boolean
}

const links: LinkProps[] = [
  {
    name: "HOME",
    to: "/",
    gradient: "radial-gradient(circle, rgba(244, 67, 54, 0.75) 0%, rgba(255, 235, 59, 0.75) 100%)",
  },
  {
    name: "ABOUT",
    to: "/about",
    gradient: "radial-gradient(circle, rgba(255,235,59,0.75) 0%, rgba(8,127,35,0.75) 100%)",
  },
  {
    name: "CONTACT",
    to: "/contact",
    gradient: "radial-gradient(circle, rgba(76,175,80,0.75) 0%, rgba(33,150,243,0.75) 100%)",
  },
]

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
      {links.map(link => (
        <MenuLink link={link} key={link.name} />
      ))}
    </MenuHolder>
  )
}
