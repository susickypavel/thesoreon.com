import styled from "@emotion/styled"
import QrCodeComponent from "qrcode.react"
import { TableOfContentsHolder } from "../table-of-contents/table-of-contents.styled"

export const StyledQrCode = styled(QrCodeComponent)`
  width: 100%;
  padding: 1.6em;
`

export const ItemsBarToggle = styled.button`
  height: 4em;
  width: 4em;
  display: none;
  margin: 0 auto;
  padding: 0.8em;
  border: 1px solid white;
  margin-bottom: 0.8em;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s linear;

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
    background-color: rgba(0, 0, 0, 1);
  }
`
export const ItemsBarContent = styled.div`
  & svg {
    height: auto;
    width: 100%;
    min-height: 15em;
  }
`

export const ItemsBarHolder = styled.div<{ collapsed: boolean }>`
  position: fixed;
  width: 30rem;
  z-index: 10;
  transform: translateX(-35rem);

  @media (max-width: 98rem) {
    transform: ${({ collapsed }) => (collapsed ? "translateY(calc(100% - 4em - 0.8em))" : "none")};
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
      background-color: #212121;
    }

    ${StyledQrCode} {
      height: 100px;
      border-bottom: none;
    }

    ${TableOfContentsHolder} {
      font-size: 2rem;
      line-height: 1.5;
      text-align: center;
    }
  }
`
