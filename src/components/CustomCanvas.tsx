import React, { useEffect, useRef } from "react"

import { initialize } from "~/utils/pixi"
import styled from "~/utils/styled"

const app = initialize()

const CustomCanvas: React.FC = () => {
  const canvasHolder = useRef<HTMLDivElement>()

  useEffect(() => {
    app.view.style.width = "100%"
    app.view.style.height = "100%"
    app.view.style.borderRadius = "100%"
    canvasHolder.current.appendChild(app.view)
  }, [])

  return <CanvasHolder ref={canvasHolder}></CanvasHolder>
}

const CanvasHolder = styled.div`
  height: 600px;
  width: 600px;
  border-radius: 100%;
`

export default CustomCanvas
