import React, { useRef, useEffect, useState } from "react"
// See link below for the weird import
// https://github.com/gatsbyjs/gatsby/issues/8810
import { TimelineMax, TweenLite, Linear } from "gsap/dist/gsap"

import { MenuToggleIconHolder, MenuToggleHolder, MenuToggleStroke } from "./menu-icon-toggle.styles"

export const MenuIconToggle: React.FC = () => {
  const [toggled, setToggled] = useState(false)
  const [hovered, setHovered] = useState(false)

  const strokeElement = useRef<any>()
  const strokeTween = useRef<TweenLite>()

  const toggleTimeline = useRef<TimelineMax>()
  const firstLine = useRef<HTMLSpanElement>()
  const secondLine = useRef<HTMLSpanElement>()
  const thirdLine = useRef<HTMLSpanElement>()
  const holder = useRef<HTMLDivElement>()

  useEffect(() => {
    toggleTimeline.current = new TimelineMax({ paused: true, reversed: true })

    toggleTimeline.current
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

  useEffect(() => {
    const animate = () => {
      strokeTween.current = TweenLite.to(strokeElement.current, 5, {
        strokeDashoffset: `${toggled ? "-" : "+"}=250`,
        ease: Linear.easeNone,
        onComplete: () => {
          animate()
        },
        paused: !Boolean(strokeTween.current),
      })
    }

    animate()

    return () => {
      strokeTween.current.kill()
    }
  }, [toggled])

  return (
    <MenuToggleHolder
      aria-label="Open the menu"
      onMouseEnter={() => {
        strokeTween.current.play()
        setHovered(true)
      }}
      onMouseLeave={() => {
        strokeTween.current.pause()
        setHovered(false)
      }}
      onClick={() => {
        if (toggleTimeline.current.reversed()) {
          toggleTimeline.current.play()
          setToggled(true)
        } else {
          toggleTimeline.current.reverse()
          setToggled(false)
        }
      }}
    >
      <MenuToggleStroke
        ref={strokeElement}
        hovered={hovered}
        stroke="gray"
        strokeWidth="1"
        strokeLinecap="square"
        strokeMiterlimit={30}
      >
        <rect height="100%" width="100%" />
      </MenuToggleStroke>
      <MenuToggleIconHolder ref={holder}>
        <span ref={firstLine} />
        <span ref={secondLine} />
        <span ref={thirdLine} />
      </MenuToggleIconHolder>
    </MenuToggleHolder>
  )
}
