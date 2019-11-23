import styled from "~/utils/styled"

export const Noscript = styled.noscript`
  color: white;
  background: #b33a3a;
  width: 100%;
  max-width: 700px;
  padding: 32px 32px;
  line-height: 1.3;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-align: center;

  z-index: 10;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & a {
    font-weight: bold;
    color: lightblue;
  }
`
