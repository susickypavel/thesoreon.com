import styled from "@emotion/styled"
import { Link } from "gatsby"

export const TableOfContentsHolder = styled.div`
  background: black;
  font-size: 2.4rem;
  width: 100%;
  line-height: 1.2;
  padding: 0.8em;
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
