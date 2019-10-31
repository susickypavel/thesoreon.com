import React, { Attributes } from "react"
import { IconType, IconBaseProps } from "react-icons/lib/cjs"

export function createReactIcon(icon: IconType, props?: IconBaseProps & Attributes) {
  return React.createElement(icon, props)
}
