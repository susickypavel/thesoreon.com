import React from "react"
import styled from "@emotion/styled"

import { DesktopIcon } from "./desktop-icon/desktop-icon.component"

export const Desktop: React.FC = () => {
  return (
    <DesktopHolder>
      <DesktopIcon />
    </DesktopHolder>
  )
}

const DesktopHolder = styled.div`
  background: yellow;
  height: 100vh;
  position: relative;
`
