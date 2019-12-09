import styled from "~/utils/styled"
import { Link } from "gatsby"

export const BlogPostPreviewWrapper = styled(Link)`
  background-color: ${props => props.theme.actionButtons.default};
  color: #212121;
  margin-bottom: 2.4rem;
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.actionButtons.focus};
  }

  transition: background-color 0.15s linear;
`

export const BlogPostPreviewBody = styled.div`
  padding: 1.6em;
`

export const BlogPostTitle = styled.h2`
  font-size: 2.4rem;
`

export const BlogPostDescription = styled.p`
  font-size: 1.6rem;
  font-weight: lighter;
  margin: 0.8em 0;
`
