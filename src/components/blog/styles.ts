import { Link } from "gatsby"

import styled from "~/utils/styled"
import { TagColor } from "~/utils/getTagColor"

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
      content: "";
    }
  }

  &:focus {
    color: ${props => props.theme.linksColors.focus};
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus::before {
    content: "▶ ";
    vertical-align: text-top;
  }

  outline: none;
`

export const TagWrapper = styled.div<TagColor>`
  background-color: ${props => props.background};
  color: ${props => props.foreground};
  display: inline-block;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25);

  border-radius: 4px;
  padding: 8px 12px;
  margin: 3px 6px 3px 0px;

  font-weight: bold;
  text-decoration: none;
`

export const TagsHolder = styled.div`
  margin: 16px 0;
`
