import styled from "@emotion/styled"
import { Link } from "gatsby"

export const TableOfContentsHolder = styled.div`
  background: #ef1957;
  border: 1px solid black;
  font-size: 2.4rem;
  width: 100%;
  line-height: 1.2;
  padding: 0.8em;
`
export const TableOfContentsLine = styled(Link)<{ selected: boolean }>(({ selected }) => ({
  color: selected ? "white" : "black",
  fontWeight: "bold",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  display: "block",
  position: "relative",
  textDecoration: "none",
  transition: "color 0.5s linear",
  "&:hover, &:focus": {
    outline: "none",
    transitionDuration: "0.2s",
    "&:after": {
      width: "100%",
    },
  },
  "&:after": {
    content: "' '",
    display: "flex",
    width: "0%",
    height: "5px",
    background: "black",
    position: "absolute",
    top: "50%",
    transform: "translateY(-25%)",
    transition: "width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)",
  },
  "&:before": {
    content: `'${selected ? "> " : "- "} '`,
  },
}))
