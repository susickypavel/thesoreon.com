import React from "react"

import { QRCode, QRCodeHolderWithBackground, QRCodeHolderWithoutBackground } from "./qr-code.styles"

interface Props {
  slug: string
  fluid: any
}

export const LinkQRCode: React.FC<Props> = ({ slug, fluid }) => {
  const QRCodeHolder = fluid ? (
    <QRCodeHolderWithBackground Tag="div" fluid={fluid} />
  ) : (
    <QRCodeHolderWithoutBackground />
  )
  return React.cloneElement(QRCodeHolder, {
    children: (
      <QRCode value={`https://thesoreon.com${slug}`} renderAs="svg" bgColor="transparent" />
    ),
  })
}
