import React, { useState } from "react"
import styled from "@emotion/styled"

export const DesktopIcon: React.FC = () => {
  const [position, setPosition] = useState({ x: 100, y: 0 })
  const [anchor, setAnchor] = useState({ x: 0, y: 0 })

  const Block = styled.div`
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    left: ${position.x}px;
    top: ${position.y}px;
  `
  return (
    <Block
      draggable={true}
      onMouseDown={e => {
        const { top, left } = e.currentTarget.getBoundingClientRect()
        setAnchor({ x: e.clientX - left, y: e.clientY - top })
      }}
      onDragEnd={e => {
        setPosition({
          x:
            e.clientX + 100 > window.innerWidth
              ? window.innerWidth - 100
              : e.clientX - 50 < 0
              ? 0
              : e.clientX - anchor.x,
          y:
            e.clientY + 100 > window.innerHeight
              ? window.innerHeight - 100
              : e.clientY < 0
              ? 0
              : e.clientY - anchor.y,
        })
      }}
    />
  )
}
