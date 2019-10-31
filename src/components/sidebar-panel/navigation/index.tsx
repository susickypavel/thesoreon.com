import React from "react"
import { NavigationLink, NavigationWrapper } from "./styles"
import { Link } from "gatsby"

const Navigation: React.FC = () => {
  return (
    <NavigationWrapper>
      <NavigationLink>
        <Link to="/">HOME</Link>
      </NavigationLink>
    </NavigationWrapper>
  )
}

export default Navigation
