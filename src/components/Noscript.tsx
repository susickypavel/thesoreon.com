import React from "react"
import styled from "~/utils/styled"

export const Noscript: React.FC = () => {
  return (
    <NoscriptWrapper>
      Oops. It seems you have <b>Javascript</b> disabled. <br /> Please consider enabling it using{" "}
      <a href="https://www.enable-javascript.com/">this</a> guide.
    </NoscriptWrapper>
  )
}

const NoscriptWrapper = styled.div`
  color: white;
  background: #b33a3a;
  width: 100%;
  padding: 32px 32px;
  line-height: 1.3;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-align: center;

  & a {
    font-weight: bold;
    color: lightblue;
  }
`
