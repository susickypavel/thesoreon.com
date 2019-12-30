import styled from "@emotion/styled"
import QRCodeComponent from "qrcode.react"

export const QRCodeHolder = styled.div`
  background-color: #f8ee03;
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
