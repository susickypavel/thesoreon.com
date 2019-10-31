import React from "react"
import { NavigationWrapper, NavigationLink } from "./styles"

const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <NavigationLink to="/">HOME</NavigationLink>
    </NavigationWrapper>
  )
}

export default Navigation
