import React from "react"

import { RepositoryTechnology } from "../../repository-list.component"
import { TechnologyLinkHolder, TechnologyLogo } from "./technology-link.styles"

interface Props {
  technology: RepositoryTechnology
}

const TechnologyLink: React.FC<Props> = ({ technology: { name, link } }) => {
  return (
    <TechnologyLinkHolder href={link}>
      <TechnologyLogo src={`${name.toLowerCase()}.png`} alt="" />
      <span>{name}</span>
    </TechnologyLinkHolder>
  )
}

export default TechnologyLink
