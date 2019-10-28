import styled, { CreateStyled } from "@emotion/styled"

export type Theme = {
  bg: {
    primary: string
    secondary: string
  }
  fg: {
    primary: string
    secondary: string
    links: string
  }
  transitionTheme: string
}

export default styled as CreateStyled<Theme>
