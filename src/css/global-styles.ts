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
    --primary-bg-color: lightblue;
    --primary-fg-color: black;

    --secondary-bg-color: white;
    --secondary-fg-color: black;

    --links-color: #ef1957;
  }
  body.dark {
    --primary-bg-color: #343434;
    --primary-fg-color: #99b2cc;

    --secondary-bg-color: #1a232a;
    --secondary-fg-color: white;

    --links-color: #ef1957;
  }
`
