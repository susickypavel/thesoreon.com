import { css } from "@emotion/core"

import { BODY_MINWIDTH } from "./constants"

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    overflow-y: unset; /* This hides scrollbar caused by typography.js */
  }

  @media (max-width: 768px) {
    :root {
      font-size: 50%;
    }
  }

  h1 {
    font-size: 6.4rem;
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
