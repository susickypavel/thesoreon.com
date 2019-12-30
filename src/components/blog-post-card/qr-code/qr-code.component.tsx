import React from "react"

import { QRCode, QRCodeHolder } from "./qr-code.styles"

interface Props {
  slug: string
}

export const LinkQRCode: React.FC<Props> = ({ slug }) => {
  return (
    <QRCodeHolder>
      <QRCode value={`https://thesoreon.com${slug}`} renderAs="svg" bgColor="transparent" />
    </QRCodeHolder>
  )
}
