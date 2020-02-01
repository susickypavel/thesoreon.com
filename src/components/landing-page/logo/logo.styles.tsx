import styled from "@emotion/styled"

export const LogoHolder = styled.div<{ height: number }>`
  background: #212121;
  padding: 8px;
  box-sizing: content-box;
  margin: 16px;
  max-width: 275px;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const Bar = styled.div<{ width: number; height: number }>(props => ({
  width: props.width,
  maxHeight: props.height,
  height: "1px",
  background: "white",
}))
