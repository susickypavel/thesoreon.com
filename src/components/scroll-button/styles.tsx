import styled from "~/utils/styled"

import { LAYOUT_MEDIA_QUERY_TABLET } from "~/css/constants"

export const ScrollButtonWrapper = styled.button<{ visible: boolean }>`
  display: none;

  position: fixed;
  bottom: 16px;
  right: 16px;

  width: 50px;
  height: 50px;
  padding: 0;

  border-radius: 100%;
  border: 1.5px solid black;

  outline: none;

  background-color: ${props => props.theme.linksColors.default};

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    border-color: ${props => props.theme.linksColors.focus};
  }

  @media (max-width: ${LAYOUT_MEDIA_QUERY_TABLET}) {
    display: block;

    transform: ${props => (props.visible ? "translateX(0px)" : "translateX(80px)")};
  }

  transition: transform 0.3s ease-in-out;
`
