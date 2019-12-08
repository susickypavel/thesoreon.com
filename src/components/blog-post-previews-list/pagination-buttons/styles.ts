import { Link } from "gatsby"
import styled from "~/utils/styled"

export const PaginationButton = styled(Link)(props => {
  return {
    fontSize: "1.6rem",
    color: props.theme.links.text,
    backgroundColor: props.theme.links.default,
    padding: "0.8em",
    width: "47.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: props.theme.blogPreview.boxshadow,
    textDecoration: "none",
    "&:hover, &:focus": {
      textDecoration: "underline",
    },
    "& svg": {
      margin: "0 0.4em",
    },
  }
})
