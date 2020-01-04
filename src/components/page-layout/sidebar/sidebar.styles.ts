import styled from "@emotion/styled"

export const SidebarHolder = styled.div<{ visible: boolean }>`
  width: 300px;
  height: 100%;
  background: black;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  transform: ${({ visible }) => (visible ? "scale(1)" : "scale(0)")};
  transition: transform 0.25s linear;
`
