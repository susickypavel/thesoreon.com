import styled from "~/utils/styled"

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
