import { css } from "@emotion/core"

const DARK_THEME_HIGHLIGHT_BG = "#2d2d2d"
const DARK_THEME_HIGHLIGHT_BACKGROUND = "rgba(0, 0, 0, 0.5)"
const DARK_THEME_HIGHLIGHT_BORDER = "#268bd2"

const LIGHT_THEME_BACKGROUND = "#fdf6e3"
const LIGHT_THEME_HIGHLIGHT_BACKGROUND = "#feb"
const LIGHT_THEME_HIGHLIGHT_BORDER = "#f99"

export default css`
  .gatsby-highlight-code-line {
    display: block;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
  }

  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  body.light {
    /* import "prismjs/themes/prism-solarizedlight.css" */
    .gatsby-highlight {
      background-color: ${LIGHT_THEME_BACKGROUND};
      border-radius: 0.3em;
      margin: 0.5em 0;
      padding: 1em;
      overflow: auto;
    }

    .gatsby-highlight-code-line {
      background-color: ${LIGHT_THEME_HIGHLIGHT_BACKGROUND};
      border-left: 0.25em solid ${LIGHT_THEME_HIGHLIGHT_BORDER};
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background-color: ${LIGHT_THEME_BACKGROUND};
    }

    code[class*="language-"],
    pre[class*="language-"] {
      color: #657b83;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;

      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"] ::-moz-selection {
      background: #073642;
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"] ::selection,
    code[class*="language-"]::selection,
    code[class*="language-"] ::selection {
      background: #073642;
    }

    /* Code blocks */

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #93a1a1;
    }

    .token.punctuation {
      color: #586e75;
    }

    .namespace {
      opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #268bd2;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.url,
    .token.inserted {
      color: #2aa198;
    }

    .token.entity {
      color: #657b83;
      background: #eee8d5;
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #859900;
    }

    .token.function,
    .token.class-name {
      color: #b58900;
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: #cb4b16;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
  }

  body.dark {
    /* import "prismjs/themes/prism-tomorrow.css" */
    .gatsby-highlight {
      background-color: ${DARK_THEME_HIGHLIGHT_BG};
      border-radius: 0.3em;
      margin: 0.5em 0;
      padding: 1em;
      overflow: auto;
    }

    .gatsby-highlight-code-line {
      background-color: ${DARK_THEME_HIGHLIGHT_BACKGROUND};
      border-left: 0.25em solid ${DARK_THEME_HIGHLIGHT_BORDER};
    }

    code[class*="language-"],
    pre[class*="language-"] {
      color: #ccc;
      background: none;
      font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
      font-size: 1em;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #2d2d2d;
    }

    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: #999;
    }

    .token.punctuation {
      color: #ccc;
    }

    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted {
      color: #e2777a;
    }

    .token.function-name {
      color: #6196cc;
    }

    .token.boolean,
    .token.number,
    .token.function {
      color: #f08d49;
    }

    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
      color: #f8c555;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
      color: #cc99cd;
    }

    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
      color: #7ec699;
    }

    .token.operator,
    .token.entity,
    .token.url {
      color: #67cdcc;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }

    .token.inserted {
      color: green;
    }
  }
`
