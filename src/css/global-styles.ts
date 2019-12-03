import { css } from "@emotion/core"
import { darken, lighten } from "polished"

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
    padding: 25px 16px 16px 16px;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  body.dark {
    background: #1b1b1b;
    color: white;

    transition: all 0.2s linear;

    --action-buttons-default: #03a9f4;
    --action-buttons-focus: ${lighten(0.25, "#03a9f4")};
    --action-buttons-icon: #212121;

    --blog-preview-boxshadow: 0px 0px 4px rgba(255, 255, 255, 0.8);
  }

  body.light {
    background: white;
    color: black;

    transition: all 0.2s linear;

    --action-buttons-default: #90caf9;
    --action-buttons-focus: ${darken(0.25, "#90caf9")};
    --action-buttons-icon: #212121;

    --blog-preview-boxshadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  }
`

export default globalStyles
