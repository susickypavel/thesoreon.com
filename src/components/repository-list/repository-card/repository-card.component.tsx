import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

import {
  RepositoryHolder,
  LinkToRepository,
  RepositoryName,
  RepositoryDescription,
  TechnologiesHolder,
} from "./repository-card.styles"
import { Repository } from "../repository-list.component"
import TechnologyLink from "./technology-link/technology-link.component"

interface Props {
  data: Repository
}

const RepositoryCard: React.FC<Props> = ({ data }) => {
  return (
    <RepositoryHolder>
      <RepositoryName>{data.name}</RepositoryName>
      <RepositoryDescription>{data.description}</RepositoryDescription>
      <TechnologiesHolder>
        {data.technologies.map(technology => (
          <TechnologyLink technology={technology} key={technology.name} />
        ))}
      </TechnologiesHolder>
      <LinkToRepository href={data.htmlUrl}>
        <span>Visit the repository</span>
        <span>
          External Link <FaExternalLinkAlt size="1.6rem" />
        </span>
      </LinkToRepository>
    </RepositoryHolder>
  )
}

export default RepositoryCard
