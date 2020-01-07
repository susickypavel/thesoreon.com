import styled from "@emotion/styled"
import QrCodeComponent from "qrcode.react"
import { TableOfContentsHolder } from "../table-of-contents/table-of-contents.styled"

export const StyledQrCode = styled(QrCodeComponent)`
  width: 100%;
  padding: 1.6em;
`

export const ItemsBarToggle = styled.button`
  height: 6em;
  width: 6em;
  display: none;
  margin: 0 auto;
  padding: 1.2em;
  border-radius: 100%;
  border: 3px solid black;
  margin-bottom: 0.8em;
  background-color: rgba(0, 184, 255, 1);

  outline: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  & svg {
    height: 100%;
    width: 100%;
  }

  &:hover,
  &:focus {
  }
`
export const ItemsBarContent = styled.div``

export const ItemsBarHolder = styled.div<{ collapsed: boolean }>`
  position: fixed;
  width: 30rem;
  z-index: 10;
  transform: translateX(-35rem);

  @media (max-width: 98rem) {
    transform: ${({ collapsed }) => (collapsed ? "translateY(calc(100% - 6em - 0.8em))" : "none")};
    transition: transform 0.5s linear;
    bottom: 0;
    max-width: 80em;
    width: 100%;

    ${ItemsBarToggle} {
      display: flex;
    }

    ${ItemsBarContent} {
      display: flex;
      flex-flow: column wrap;
      background-color: #f8ee03;
    }

    ${StyledQrCode} {
      height: 100px;
    }

    ${TableOfContentsHolder} {
      font-size: 2rem;
      line-height: 1.5;
      text-align: center;
    }
  }
`
