import styled from "@emotion/styled"
import QRCodeComponent from "qrcode.react"

import BackgroundImage from "gatsby-background-image"

export const QRCodeHolder = styled(BackgroundImage)`
  opacity: 1 !important;
  flex-shrink: 0;
  width: 15rem;
  padding: 1.6em;

  @media (max-width: 650px) {
    width: 100%;
    padding: 6.4em;
  }
`

export const QRCode = styled(QRCodeComponent)<{ hovered: { value: boolean } }>`
  transform: translateZ(30px) ${({ hovered: { value } }) => (value ? "scale(1)" : "scale(0)")};
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 100%;
  height: 100%;
`

export const QRCodeBackround = styled.div<{ hovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  transition: all 0.25s cubic-bezier(0.51, 0.92, 0.24, 1.15);
  transform: ${({ hovered }) => (hovered ? "scale(1)" : "scale(0)")};
`
