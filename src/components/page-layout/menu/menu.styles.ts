import styled from "@emotion/styled"

export const MenuHolder = styled.div`
  background: linear-gradient(
    180deg,
    rgba(149, 149, 149, 0.2597) 0%,
    rgba(104, 104, 104, 0.2756) 100%
  );
  border: 1px solid darkgray;
  position: fixed;
  right: 32px;
  top: 32px;
  height: calc(100% - 64px);
  max-width: 800px;
  width: 100%;
  transform: scale(0);
  transform-origin: right top;
`
