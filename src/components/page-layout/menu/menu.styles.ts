import styled from "@emotion/styled"

export const MenuHolder = styled.div`
  border: 2px solid darkgray;
  background-color: black;
  position: fixed;
  z-index: 1000;
  right: 32px;
  top: 32px;
  height: calc(100% - 64px);
  padding: 1.6em;
  max-width: 800px;
  width: 100%;
  transform-origin: right top;
  transform: scale(0);

  @media (max-width: 875px) {
    right: 0;
    top: 0;
    height: 100%;
    max-width: 100%;
  }
`
