import React, { useRef, useEffect } from "react"

import { initialize } from "./home-hero-webgl"
import { CanvasHolder } from "./styles"

const application = initialize()

const HomeHero: React.FC = () => {
  const canvasHolder = useRef<HTMLDivElement>()

  useEffect(() => {
    canvasHolder.current.appendChild(application.view)
  }, [])

  return <CanvasHolder ref={canvasHolder} />
}

export default HomeHero
