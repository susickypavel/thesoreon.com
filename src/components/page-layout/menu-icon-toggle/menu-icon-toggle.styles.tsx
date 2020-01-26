import styled from "@emotion/styled"

const OFFSET = "3.2em"
const SIZE = "5em"

export const Test = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  padding: 1.2em;
  border: 1px solid gray;
  position: fixed;
  right: ${OFFSET};
  top: ${OFFSET};
`

export const MenuToggleHolder = styled.div`
  width: ${SIZE};
  height: ${SIZE};

  display: flex;
  justify-content: center;
  flex-flow: column wrap;

  & span {
    display: block;
    margin-bottom: 8px;

    height: 4px;
    width: 100%;
    background-color: white;

    transition: width 0.2s linear;

    &:first-of-type {
      width: 45%;
    }

    &:last-of-type {
      width: 45%;
      margin-left: auto;
      margin-bottom: 0;
    }
  }
`
