import React, { useRef, useEffect } from "react"
import { TimelineMax } from "gsap"

import { MenuToggleHolder, Test } from "./menu-icon-toggle.styles"

export const MenuIconToggle: React.FC = () => {
  const tl = useRef<TimelineMax>()

  const firstLine = useRef<HTMLSpanElement>()
  const secondLine = useRef<HTMLSpanElement>()
  const thirdLine = useRef<HTMLSpanElement>()
  const holder = useRef<HTMLDivElement>()

  useEffect(() => {
    tl.current = new TimelineMax({ paused: true, reversed: true })

    tl.current
      .to(firstLine.current, { duration: 0.25, width: "100%", ease: "power4" })
      .to(thirdLine.current, { duration: 0.25, width: "100%", ease: "power4" }, "<")
      .to(secondLine.current, { duration: 0.1, scaleX: 0 })
      .to(firstLine.current, { duration: 0.25, y: 8, ease: "power4" }, "slide")
      .to(thirdLine.current, { duration: 0.25, y: -8, ease: "power4" }, "slide")
      .to(holder.current, { duration: 0.5, rotate: 360, ease: "power4" })
      .to(
        firstLine.current,
        { duration: 0.25, rotate: 45, y: 12, ease: "power4", width: "100%" },
        "cross"
      )
      .to(
        thirdLine.current,
        { duration: 0.25, rotate: -45, y: -12, ease: "power4", width: "100%" },
        "cross"
      )
  }, [])

  return (
    <Test>
      <MenuToggleHolder
        onClick={() => {
          if (tl.current.reversed()) {
            tl.current.play()
          } else {
            tl.current.reverse()
          }
        }}
        ref={holder}
      >
        <span ref={firstLine} />
        <span ref={secondLine} />
        <span ref={thirdLine} />
      </MenuToggleHolder>
    </Test>
  )
}
