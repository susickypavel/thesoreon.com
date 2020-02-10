import styled from "@emotion/styled"
import { Link } from "gatsby"

export const SpanHoverFill = styled.span<{
  entryCoords: { x: number; y: number }
  gradient: string
}>`
  display: block;
  position: absolute;
  top: ${props => props.entryCoords.y}px;
  left: ${props => props.entryCoords.x}px;
  width: 0;
  height: 0;
  background: ${props => props.gradient};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: width 0.75s ease-in-out, height 0.75s ease-in-out;
  z-index: -1;
`

export const MenuLinkHolder = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: bold;
  padding: 0.8em;
  margin-bottom: 0.6em;
  display: block;
  overflow: hidden;

  text-shadow: 1px 1px 1px black;
  text-align: center;

  position: relative;

  transition: text-shadow 0.5s linear;

  &:hover {
    ${SpanHoverFill} {
      width: 1800px;
      height: 1800px;
    }
  }
`
