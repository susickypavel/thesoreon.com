import React from "react"
import { GoPin } from "react-icons/go"

import RepositoryCard from "./repository-card/repository-card.component"
import { RepositoryListHolder } from "./repository-list.styles"
import { BlogPostListHeadline as RepositoryListHeadline } from "../blog-post-list/blog-post-list.styles"

export interface Repository {
  name: string
  description: string
  htmlUrl: string
  technologies: RepositoryTechnology[]
}

export interface RepositoryTechnology {
  name: string
  link: string
}

const RepositoryList: React.FC = () => {
  const repositories: Repository[] = [
    {
      name: "thesoreon.com",
      description: "Pavel Susicky's personal website/blog",
      htmlUrl: "https://github.com/Thesoreon/thesoreon.com",
      technologies: [
        {
          name: "React",
          link: "https://reactjs.org/",
        },
        {
          name: "Gatsby",
          link: "https://www.gatsbyjs.org/",
        },
        {
          name: "Typescript",
          link: "https://www.typescriptlang.org/",
        },
      ],
    },
  ]

  return (
    <RepositoryListHolder>
      <RepositoryListHeadline>
        Pinned repositories <GoPin size="3.8rem" color="#ffd700" />
      </RepositoryListHeadline>
      {repositories.map(repo => (
        <RepositoryCard key={repo.name} data={repo} />
      ))}
    </RepositoryListHolder>
  )
}

export default RepositoryList
