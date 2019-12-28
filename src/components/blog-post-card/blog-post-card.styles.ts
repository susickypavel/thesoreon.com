import styled from "~/utils/styled"

import { animated } from "react-spring"

export const BlogPostCardWrapper = styled(animated.div)(() => ({
  backgroundImage: "linear-gradient(150deg, #5a00ff 0%, #ff1ff7 100%, #ff1ff7 100%)",
  width: "500px",
  height: "300px",
  boxShadow: "2px 2px 50px rgba(0, 0, 0, 0.2)",
  position: "fixed",
  top: "50%",
  right: "50%",
  transformStyle: "preserve-3d",
  display: "flex",
}))
