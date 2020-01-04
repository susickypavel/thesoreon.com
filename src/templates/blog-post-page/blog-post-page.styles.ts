import styled from "@emotion/styled"
import Img from "gatsby-image"

export const BlogPostPageHolder = styled.div`
  max-width: 80em;
  width: 100%;
  background-color: #212121;
  margin: 0 auto;
  color: white;
`

export const BlogPostPageThumbnail = styled(Img)`
  border: 2px solid white;
  width: calc(100% + 6.4em);
  transform: translateX(-3.2em);

  @media (max-width: 1024px) {
    width: 100%;
    transform: none;
  }
`

export const BlogPostPageHeader = styled.h2`
  font-size: 4.8rem;
  padding: 0.4em;
  text-decoration: underline;
`

export const MdxBodyHolder = styled.div`
  font-size: 2.4rem;
  padding: 0.8em;
  padding-top: 0;
`
