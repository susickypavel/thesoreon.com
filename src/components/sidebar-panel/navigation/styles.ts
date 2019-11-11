import styled from "~/utils/styled"
import { BlogPostListLink } from "~/components/blog/styles"

export const NavigationWrapper = styled.nav`
  margin-top: 16px;
`

export const NavigationLink = styled(BlogPostListLink)`
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.fg.defaultColor};
  text-align: center;
`
