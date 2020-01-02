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
    width: calc(100% + 3.2em);
    transform: translateX(-1.6em);
    border: 2.5px solid white;
    margin: 1.6em 0 !important;
  }

  .gatsby-highlight {
    font-size: 1.6rem;
    border: 2.5px solid white;
    margin: 1.6em 0;
    width: calc(100% + 4.8em);
    transform: translateX(-2.4em);

    & pre {
      margin: 0 !important;
      padding: 3.2em;
      border-radius: 0;
    }
  }
`

export default globalStyles
