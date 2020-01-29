import styled from "@emotion/styled"

const OFFSET = 6.4
const SIZE = 5
const PADDING = 1.2

const totalSize = SIZE + 2 * PADDING + 0.2

export const MenuToggleHolder = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  padding: ${PADDING}em;
  border: 1px solid gray;
  position: fixed;
  right: ${OFFSET}em;
  top: ${OFFSET}em;
  cursor: pointer;
`

export const MenuToggleIconHolder = styled.div`
  width: ${SIZE}em;
  height: ${SIZE}em;

  display: flex;
  justify-content: center;
  flex-flow: column wrap;

  & span {
    display: block;
    margin-bottom: 8px;

    height: 4px;
    width: 100%;
    background-color: white;

    transition: width 0.2s linear;

    &:first-of-type {
      width: 45%;
    }

    &:last-of-type {
      width: 45%;
      margin-left: auto;
      margin-bottom: 0;
    }
  }
`

export const MenuToggleStroke = styled.svg<{ hovered: boolean }>`
  position: absolute;
  top: -1px;
  left: -1px;
  z-index: -1;
  height: ${totalSize}em;
  width: ${totalSize}em;
  stroke-dasharray: ${({ hovered }) => (hovered ? "10px" : "0px")};
  stroke-width: ${({ hovered }) => (hovered ? "2px" : "1px")};
`
