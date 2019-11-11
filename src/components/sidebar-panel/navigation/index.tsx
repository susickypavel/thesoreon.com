import React from "react"
import { NavigationWrapper, NavigationLink } from "./styles"

const Navigation: React.FC = () => {
  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur()
  }

  return (
    <NavigationWrapper>
      <NavigationLink to="/" onClick={handleClick} activeClassName="navigation__link--active">
        HOME
      </NavigationLink>
    </NavigationWrapper>
  )
}

export default Navigation
