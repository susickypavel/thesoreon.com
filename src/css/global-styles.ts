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
    font-size: 1.6rem;
    width: calc(100% + 4.8em);
    transform: translateX(-2.4em);
    box-shadow: 0px 0px 64px black;
    margin: 1.6em 0 !important;
  }

  .gatsby-highlight {
    font-size: 1.6rem;
    width: calc(100% + 4.8em);
    transform: translateX(-2.4em);
    box-shadow: 0px 0px 64px black;
    margin: 1.6em 0;

    & pre {
      margin: 0 !important;
      padding: 3.2em;
      border-radius: 0;
    }
  }
`

export default globalStyles
