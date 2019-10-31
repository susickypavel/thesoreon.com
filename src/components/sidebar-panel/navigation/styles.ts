import styled from "~/utils/styled"
import { BlogPostListLink } from "~/components/blog/styles"

export const NavigationWrapper = styled.nav`
  margin-top: 16px;
`

export const NavigationLink = styled(BlogPostListLink)`
  text-align: center;
  font-weight: bold;

  &:focus::before {
    vertical-align: baseline;
  }
`
