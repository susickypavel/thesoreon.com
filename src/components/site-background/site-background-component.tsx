import React, { useRef, useEffect } from "react"

import { initialize } from "./webgl-background"
import { CanvasHolder } from "./styles"

const canvas = initialize()

const SiteBackground: React.FC = () => {
  const canvasHolder = useRef<HTMLDivElement>()

  useEffect(() => {
    canvasHolder.current.appendChild(canvas)
  }, [])

  return <CanvasHolder ref={canvasHolder} />
}

export default SiteBackground
