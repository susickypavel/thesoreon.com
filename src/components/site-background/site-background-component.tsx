import React, { useRef, useEffect } from "react"

import { SiteBackgroundWebGL } from "./site-background-webgl"
import { CanvasHolder } from "./styles"

const SBWebGL = new SiteBackgroundWebGL()

const handleClick = (e: MouseEvent) => {
  SBWebGL.addShockwave(e.clientX, e.clientY)
}

const handleTouch = (e: TouchEvent) => {
  SBWebGL.addShockwave(e.touches[0].clientX, e.touches[0].clientY)
}

const SiteBackground: React.FC = () => {
  const canvasHolder = useRef<HTMLDivElement>()

  useEffect(() => {
    const _canvasHolder = canvasHolder.current

    _canvasHolder.appendChild(SBWebGL._app.view)
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("touchstart", handleTouch)

    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("touchstart", handleTouch)
    }
  }, [])

  return <CanvasHolder ref={canvasHolder} />
}

export default SiteBackground
