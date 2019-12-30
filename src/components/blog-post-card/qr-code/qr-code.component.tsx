import React from "react"

import { QRCode, QRCodeHolder } from "./qr-code.styles"

// TODO: replace hardcoded value of QRCode with link to a blog post
export const LinkQRCode: React.FC = () => {
  return (
    <QRCodeHolder>
      <QRCode value="https://thesoreon.com" renderAs="svg" bgColor="transparent" />
    </QRCodeHolder>
  )
}
