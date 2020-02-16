import { css } from "@emotion/core"
import GrainedBG from "./bg-grained-3.jpg"

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
    background-color: #424242;
  }

  .gatsby-resp-image-wrapper {
    font-size: 1.6rem;
    width: calc(100% + 4.8em);
    transform: translateX(-2.4em);
    box-shadow: 0px 0px 8px black;
    margin: 1.6em 0 !important;

    @media (max-width: 1024px) {
      width: 100%;
      transform: none;
    }
  }

  .gatsby-highlight {
    font-size: 1.6rem;
    width: calc(100% + 4.8em);
    transform: translateX(-2.4em);
    box-shadow: 0px 0px 8px black;
    margin: 1.6em 0;

    @media (max-width: 1024px) {
      width: 100%;
      transform: none;
    }

    & pre {
      margin: 0 !important;
      padding: 3.2em;
      border-radius: 0;
    }
  }

  body::-webkit-scrollbar {
    width: 2em;
  }

  body::-webkit-scrollbar-track {
    background: linear-gradient(45deg, rgba(189, 0, 240, 1) 0%, rgba(0, 184, 255, 1) 100%);
  }

  body::-webkit-scrollbar-thumb {
    background: transparent;
    border: 3px solid transparent;
    box-shadow: 0px 0px 0px 100000vh black;
    border: 4px solid black;
  }
`

export default globalStyles
