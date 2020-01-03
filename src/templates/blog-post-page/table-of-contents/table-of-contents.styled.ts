import styled from "@emotion/styled"

export const TableOfContentsHolder = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  font-size: 2.4rem;
  width: 300px;
  line-height: 1.2;
`
export const TableOfContentsLine = styled.li<{ selected: boolean }>(({ selected }) => ({
  color: selected ? "red" : "white",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  "&:before": {
    content: `'${selected ? "> " : "- "} '`,
  },
}))
