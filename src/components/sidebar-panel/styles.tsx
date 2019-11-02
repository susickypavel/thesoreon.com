import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import styled from "~/utils/styled"
import { getGoldenRatio } from "~/utils/golden-ratio-calculator"
import { LAYOUT_MEDIA_QUERY_TABLET, NAVIGATION_PADDING } from "~/css/constants"

export const SidebarWrapper = styled.div`
  position: fixed;
  right: 0;

  background-color: ${props => props.theme.bg.primary};
  color: ${props => props.theme.fg.primary};
  transition: ${props => props.theme.transitionTheme};

  width: ${getGoldenRatio(100, "B")}%;
  height: 100%;

  padding: ${NAVIGATION_PADDING};

  @media (max-width: ${LAYOUT_MEDIA_QUERY_TABLET}) {
    position: static;
    width: 100%;
    height: auto;
  }
`

export const Avatar = styled(Img)`
  border-radius: 100%;
  display: block !important;
  margin: 0 auto;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`

export const SidebarHeader = styled.h1`
  text-align: center;
  margin: 16px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    margin-left: 10px;
  }
`

export const SocialMediaHolder = styled.div`
  text-align: center;
`

export const SocialMediaLink = styled(OutboundLink)`
  margin: 0 3px;
  color: ${props => props.theme.linksColors.default};
  &:focus {
    color: ${props => props.theme.linksColors.focus};
  }

  outline: none;
`
