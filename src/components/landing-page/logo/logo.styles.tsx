import styled from "@emotion/styled"
import { Link } from "gatsby"

export const LogoLink = styled(Link)<{ height: number }>`
  display: block;
  height: ${props => props.height / 10}em;
  max-width: 27.5em;
  margin: 1.6em;
  box-sizing: content-box;
  padding: 0.8em;
  background: #212121;
`

export const LogoHolder = styled.div`
  height: 100%;
  width: 100%;
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
