import { css } from "@emotion/core"

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

  body {
    min-width: 320px;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  .gatsby-resp-image-wrapper {
    transform: scale(1.1);
    border: 2.5px solid white;
    margin: 1.6em 0 !important;
  }
`

export default globalStyles
