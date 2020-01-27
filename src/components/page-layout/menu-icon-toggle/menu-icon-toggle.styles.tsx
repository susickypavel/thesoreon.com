import styled from "@emotion/styled"

const OFFSET = "3.2em"
const SIZE = "5em"

export const MenuToggleHolder = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  padding: 1.2em;
  border: 1px solid gray;
  position: fixed;
  right: ${OFFSET};
  top: ${OFFSET};
  cursor: pointer;
`

export const MenuToggleIconHolder = styled.div`
  width: ${SIZE};
  height: ${SIZE};

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
  height: 7.6em;
  width: 7.6em;
  stroke-dasharray: ${({ hovered }) => (hovered ? "10px" : "0px")};
  stroke-width: ${({ hovered }) => (hovered ? "2px" : "1px")};
`
