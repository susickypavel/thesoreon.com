import { css } from "@emotion/core"

export default css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  #___gatsby {
    background-color: var(--primary-bg-color);
  }

  body.light {
    --primary-bg-color: white;
    --primary-fg-color: black;
  }
  body.dark {
    --primary-bg-color: black;
    --primary-fg-color: white;
  }
`
