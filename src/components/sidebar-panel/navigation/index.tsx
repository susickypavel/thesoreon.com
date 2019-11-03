import React from "react"
import { NavigationWrapper, NavigationLink } from "./styles"

const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <NavigationLink to="/" activeClassName="navigation__link--active">
        HOME
      </NavigationLink>
    </NavigationWrapper>
  )
}

export default Navigation
