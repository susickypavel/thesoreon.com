import React, { useRef, useEffect } from "react"
import { TimelineLite, Elastic } from "gsap/dist/gsap"

import { LogoHolder, Bar, LogoLink } from "./logo.styles"

const data = [
  -2,
  2,
  -10,
  9,
  -12,
  13,
  -50,
  56,
  -110,
  86,
  -115,
  82,
  -50,
  46,
  -120,
  82,
  -100,
  61,
  -22,
  26,
  -19,
  19,
  -19,
  41,
  -59,
  35,
  -74,
  37,
  -45,
  19,
  -19,
  16,
  -15,
  17,
  -10,
  8,
  -2,
  2,
]

const height = Math.max(...data) * 1.5

export const Logo: React.FC = () => {
  const logoRef = useRef<any>()
  const tl = useRef<TimelineLite>()

  useEffect(() => {
    tl.current = new TimelineLite().to(logoRef.current.children, {
      height: "100%",
      duration: 1.5,
      ease: Elastic.easeIn,
      stagger: {
        amount: 1,
        from: "random",
      },
    })

    return () => {
      tl.current.kill()
    }
  }, [])

  return (
    <LogoLink
      to="/"
      height={height}
      aria-label="Go to homepage"
      onMouseEnter={() => {
        tl.current?.reverse()
      }}
      onMouseLeave={() => {
        tl.current?.play()
      }}
    >
      <LogoHolder ref={logoRef}>
        {data.map((value, index) => {
          return <Bar key={index} width={3} height={Math.abs(value)} />
        })}
      </LogoHolder>
    </LogoLink>
  )
}
