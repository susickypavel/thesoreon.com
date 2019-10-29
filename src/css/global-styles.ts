import { css } from "@emotion/core"

const minFontSize = 16
const maxFontSize = 20

const deltaFontSize = maxFontSize - minFontSize

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: unset;
    font-size: ${minFontSize}px !important;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(${minFontSize}px + ${deltaFontSize} * ((100vw - 320px) / 680)) !important;
    }
  }

  @media screen and (min-width: 1000px) {
    html {
      font-size: ${maxFontSize}px !important;
    }
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
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
    --links-visited-color: blue;
    --links-focus-color: yellow;
  }

  body.dark {
    --primary-bg-color: #343434;
    --primary-fg-color: #99b2cc;

    --secondary-bg-color: #1a232a;
    --secondary-fg-color: white;

    --links-color: #ef1957;
    --links-visited-color: purple;
    --links-focus-color: yellow;
  }
`
