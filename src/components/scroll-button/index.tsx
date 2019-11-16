import React, { useEffect, useState } from "react"

import { FaArrowUp } from "react-icons/fa"
import { ScrollButtonWrapper } from "./styles"

import { LAYOUT_MEDIA_QUERY_TABLET_NUMBER } from "~/css/constants"

const OFFSET = 1
const TRANSPARENCY_ACTIVATION_OFFSET = 150

const ScrollButton: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [transparent, setTransparency] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset

    const isLargeScreen = window.innerWidth > LAYOUT_MEDIA_QUERY_TABLET_NUMBER
    const isNotScrolled = scrollPosition < window.innerHeight - OFFSET

    if (isLargeScreen || isNotScrolled) {
      setVisible(false)
    } else {
      setVisible(true)

      if (
        scrollPosition >=
        document.body.scrollHeight - window.innerHeight - TRANSPARENCY_ACTIVATION_OFFSET
      ) {
        setTransparency(true)
      } else {
        setTransparency(false)
      }
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.blur()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <ScrollButtonWrapper
      aria-label="scroll"
      aria-hidden={!visible}
      onClick={handleClick}
      visible={visible}
      transparent={transparent}
    >
      <FaArrowUp size={15} />
    </ScrollButtonWrapper>
  )
}

export default ScrollButton
