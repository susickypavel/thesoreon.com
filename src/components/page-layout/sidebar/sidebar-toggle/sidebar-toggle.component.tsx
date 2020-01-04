import React from "react"

import { SidebarToggleHolder } from "./sidebar-toggle.style"

interface Props {
  onToggle(): void
}

export const SidebarToggle: React.FC<Props> = ({ onToggle }) => {
  return (
    <SidebarToggleHolder onClick={onToggle}>
      <h1>TOGGLE</h1>
    </SidebarToggleHolder>
  )
}
