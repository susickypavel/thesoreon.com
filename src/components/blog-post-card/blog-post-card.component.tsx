import React from "react"
import { useSpring } from "react-spring"

import {
  BlogPostCardWrapper,
  BlogPostCardHeader,
  BlogPostCardDescription,
  BlogPostCardBody,
} from "./blog-post-card.styles"

const calculateTilt = (x: number, y: number, height: number, width: number) => [
  -(y - height / 2) / 20,
  (x - width / 2) / 20,
  1.02,
]

const transform = (x: number, y: number, s: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const tension = 250
const friction = 40
const mass = 5

export const BlogPostCard: React.FC = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass, tension, friction },
  }))

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { clientWidth, clientHeight } = e.currentTarget
    const { top, left } = e.currentTarget.getBoundingClientRect()

    set({
      xys: calculateTilt(clientX - left, clientY - top, clientHeight, clientWidth),
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const { clientX, clientY } = e.touches[0]
    const { clientWidth, clientHeight } = e.currentTarget
    const { top, left } = e.currentTarget.getBoundingClientRect()

    set({
      xys: calculateTilt(clientX - left, clientY - top, clientHeight, clientWidth),
    })
  }

  const handleQuit = () => {
    set({ xys: [0, 0, 1] })
  }

  return (
    <BlogPostCardWrapper
      onMouseLeave={handleQuit}
      onTouchEnd={handleQuit}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      style={{ transform: props.xys.interpolate(transform as any) }}
    >
      <BlogPostCardBody>
        <BlogPostCardHeader>How to make super amazing pages using WebGL</BlogPostCardHeader>
        <BlogPostCardDescription>
          Learn how to make beautiful pages using WeBGL and technoligies as pixi or three.js
        </BlogPostCardDescription>
      </BlogPostCardBody>
    </BlogPostCardWrapper>
  )
}
