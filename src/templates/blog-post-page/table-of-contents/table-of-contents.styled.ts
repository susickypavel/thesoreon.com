import styled from "@emotion/styled"

export const TableOfContentsHolder = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  font-size: 1.6rem;
`
export const TableOfContentsLine = styled.li<{ selected: boolean }>(({ selected }) => ({
  color: selected ? "red" : "white",
}))
