import React from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

import { PaginationButton } from "./styles"

interface Props {
  type: "next" | "previous"
  currentPage: number
}

export const PaginationMoveButton: React.FC<Props> = ({ type, currentPage }) => {
  const isNextButton = type === "next"

  const pageToSwitch = isNextButton
    ? `/${currentPage + 1}`
    : `/${currentPage - 1 === 0 ? "" : currentPage - 1}`

  return (
    <PaginationButton to={pageToSwitch}>
      {!isNextButton ? <FaArrowLeft title="left arrow" /> : null}
      {isNextButton ? "Older posts" : "Newer posts"}
      {isNextButton ? <FaArrowRight title="right arrow" /> : null}
    </PaginationButton>
  )
}
