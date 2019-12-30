import styled from "@emotion/styled"
import QRCodeComponent from "qrcode.react"

import BackgroundImage from "gatsby-background-image"

export const QRCodeHolderWithoutBackground = styled.div`
  background-color: #f8ee03;
  flex-shrink: 0;
  width: 15rem;
  padding: 1.6em;

  @media (max-width: 500px) {
    display: none;
  }
`

export const QRCodeHolderWithBackground = styled(BackgroundImage)`
  opacity: 1 !important;
  flex-shrink: 0;
  width: 15rem;
  padding: 1.6em;

  @media (max-width: 500px) {
    display: none;
  }
`

export const QRCode = styled(QRCodeComponent)`
  transform: translateZ(30px);
  width: 100%;
  height: 100%;
`
