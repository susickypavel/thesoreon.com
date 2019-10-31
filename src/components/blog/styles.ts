import { Link } from "gatsby"

import styled from "~/utils/styled"

import { BLOGPOSTLISTLINK_MARGIN, BLOGPOSTLISTHOLDER_MARGIN } from "~/css/constants"

export const BlogPostBodyHolder = styled.div`
  & a {
    color: ${props => props.theme.linksColors.default};
  }

  & a:focus {
    color: ${props => props.theme.linksColors.focus};
  }

  & a:visited {
    color: ${props => props.theme.linksColors.visited};
  }
`

export const BlogPostListHolder = styled.div`
  margin: ${BLOGPOSTLISTHOLDER_MARGIN};
`

export const BlogPostListLink = styled(Link)`
  color: ${props => props.theme.linksColors.default};
  display: inline-block;
  text-decoration: none;
  width: 100%;

  margin: ${BLOGPOSTLISTLINK_MARGIN};

  & h2 {
    display: inline;
  }

  &:active {
    &:active::before {
      content: '';
    }
  }

  &:focus {
    color: ${props => props.theme.linksColors.focus};
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus::before {
    content: '▶ ';
    vertical-align: text-top;
  }

  outline: none;
`
