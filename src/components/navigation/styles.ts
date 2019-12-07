import { Link } from "gatsby"
import styled from "~/utils/styled"

import { ActionButtonsHolder, SocialMediaLink } from "../actions-link-bar/styles"

export const NavigationLinksHolder = styled(ActionButtonsHolder)({
  left: "auto",
  right: "1.6rem",
}).withComponent("nav")

export const NavigationLink = styled(SocialMediaLink)(props => ({
  backgroundColor: props.theme.links.default,
  "&:hover, &:hover": {
    backgroundColor: props.theme.links.focus,
  },
})).withComponent(Link)
