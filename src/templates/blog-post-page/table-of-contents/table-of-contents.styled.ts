import styled from "@emotion/styled"
import { Link } from "gatsby"

export const TableOfContentsHolder = styled.div<{ sidebar: boolean }>`
  background: black;
  font-size: 2.4rem;
  width: 30rem;
  line-height: 1.2;
  padding: 0.8em;
  position: fixed;
  transform: translateX(-35rem);
  top: 16px;
  z-index: 10;

  @media (max-width: 98rem) {
    display: none;
  }
`
export const TableOfContentsLine = styled(Link)<{ selected: boolean }>(({ selected }) => ({
  color: selected ? "red" : "white",
  fontWeight: "bold",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  display: "block",
  textDecoration: "none",
  "&:hover, &:focus": {
    outline: "none",
    color: "#ff7f7f",
  },
  "&:before": {
    content: `'${selected ? "> " : "- "} '`,
  },
}))
