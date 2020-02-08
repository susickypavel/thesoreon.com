import styled from "@emotion/styled"

export const MenuHolder = styled.div`
  border: 2px solid darkgray;
  background-color: black;
  position: fixed;
  z-index: 1000;
  right: 32px;
  top: 32px;
  height: calc(100% - 64px);
  max-width: 800px;
  width: 100%;
  transform: scale(0);
  transform-origin: right top;
`
