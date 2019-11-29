import { css } from "@emotion/core"

import { BODY_MINWIDTH } from "./constants"

const globalStyles = css`
  html {
    font-size: 62.5%;
  }

  body {
    min-width: ${BODY_MINWIDTH};
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`

export default globalStyles
