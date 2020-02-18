import React, { useState, Dispatch, SetStateAction } from "react"

import { MenuLinkHolder, SpanHoverFill } from "./menu-link.styles"

interface Props {
  link: LinkProps
  setToggled: Dispatch<SetStateAction<boolean>>
}

export interface LinkProps {
  name: string
  to: string
  gradient: string
}

const MenuLink: React.FC<Props> = ({ link: { name, to, gradient }, setToggled }) => {
  const [entryCoords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const changeCoords = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    setCoords({
      x: e.pageX - left,
      y: e.pageY - top,
    })
  }

  return (
    <MenuLinkHolder
      to={to}
      onMouseEnter={changeCoords}
      onMouseLeave={changeCoords}
      onClick={() => setToggled(false)}
    >
      <SpanHoverFill entryCoords={entryCoords} gradient={gradient} />
      {name}
    </MenuLinkHolder>
  )
}

export default MenuLink
