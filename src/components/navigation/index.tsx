import React from "react"
import { FaHome } from "react-icons/fa"

import { NavigationLinksHolder, NavigationLink } from "./styles"

export const Navigation: React.FC = () => {
  return (
    <NavigationLinksHolder>
      <NavigationLink to="/">
        <FaHome title="Go Home" size="4rem" color="black" />
      </NavigationLink>
    </NavigationLinksHolder>
  )
}
