import styled from "@emotion/styled"
import { Link } from "gatsby"

export const TableOfContentsHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  font-size: 2.4rem;
  width: 300px;
  line-height: 1.2;
  padding: 0.8em;
`
export const TableOfContentsLine = styled(Link)<{ selected: boolean }>(({ selected }) => ({
  color: selected ? "red" : "white",
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
