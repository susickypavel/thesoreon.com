import React, { HTMLAttributes, useEffect, useRef } from "react"

import styled from "~/utils/styled"

interface Props extends HTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  handleCheck: boolean
  width?: number
}

const SwitchHolder = styled.div`
  display: inline-block;
  position: fixed;
  right: 5px;
  top: 5px;
`

const CheckBox = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);

  &:checked + label {
    background: #bada55;
  }

  &:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  &:focus + label:after,
  &:active + label:after {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
  }
`

const Label = styled.label<{ width: number }>`
  cursor: pointer;
  text-indent: -9999px;
  width: ${props => props.width - 10}px;
  height: ${props => props.width / 2}px;
  border-radius: ${props => props.width / 2}px;
  background: grey;
  display: block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: ${props => props.width / 2 - 10}px;
    height: ${props => props.width / 2 - 10}px;
    border-radius: ${props => props.width / 2 - 10}px;
    background: #fff;
    transition: 0.3s;
  }
`

const Switch: React.FC<Props> = ({ id, label, width = 75, handleCheck, ...inputProps }) => {
  const checkBox = useRef<HTMLInputElement>()

  useEffect(() => {
    checkBox.current.checked = handleCheck
  }, [handleCheck])

  return (
    <SwitchHolder>
      <CheckBox ref={checkBox} id={id} type="checkbox" {...inputProps} />
      <Label width={width} htmlFor={id}>
        {label}
      </Label>
    </SwitchHolder>
  )
}

export default Switch
