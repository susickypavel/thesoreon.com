import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { DefaultThumbnailQuery } from "~/graphql-types"

import { QRCode, QRCodeHolder, QRCodeBackround } from "./qr-code.styles"

interface Props {
  slug: string
  fluid: any
  hovered: boolean
}

export const LinkQRCode: React.FC<Props> = ({ slug, fluid, hovered }) => {
  const {
    file: { childImageSharp },
  } = useStaticQuery<DefaultThumbnailQuery>(graphql`
    query DefaultThumbnail {
      file(name: { eq: "default" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <QRCodeHolder Tag="div" fluid={fluid ? fluid : childImageSharp.fluid}>
      <QRCodeBackround hovered={hovered} />
      <QRCode
        value={`https://thesoreon.com${slug}`}
        renderAs="svg"
        bgColor="transparent"
        fgColor="white"
        // HACK: if using hovered={hovered} directly throws an error
        // https://www.bountysource.com/issues/49955240-warning-received-true-for-non-boolean-attribute-gray
        hovered={{ value: hovered }}
      />
    </QRCodeHolder>
  )
}
