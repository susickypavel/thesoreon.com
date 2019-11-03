import styled, { CreateStyled } from "@emotion/styled"

export type Theme = {
  bg: {
    primary: string
    secondary: string
  }
  fg: {
    primary: string
    secondary: string
    defaultColor: string
  }
  linksColors: {
    focus: string
    visited: string
    default: string
  }
  transitionTheme: string
}

export default styled as CreateStyled<Theme>
