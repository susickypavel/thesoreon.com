import styled from "~/utils/styled"
import { getGoldenRatio } from "~/utils/golden-ratio-calculator"
import { LAYOUT_MEDIA_QUERY_TABLET, CONTENTHOLDER_PADDING } from "~/css/constants"

export const ContentWrapper = styled.div`
  width: ${getGoldenRatio(100, "A")}%;
  min-height: 100vh;

  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.fg.secondary};
  transition: ${props => props.theme.transitionTheme};

  padding: ${CONTENTHOLDER_PADDING};

  @media (max-width: ${LAYOUT_MEDIA_QUERY_TABLET}) {
    width: 100%;
  }
`
