import styled from "~/utils/styled"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const Splitter = styled.span`
  flex-grow: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const ActionButtonsHolder = styled.div`
  display: flex;
  flex-flow: column wrap;

  position: fixed;

  top: 1.6rem;
  left: 1.6rem;

  height: calc(100% - 3.2rem);

  & *:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    position: static;
    height: auto;

    flex-direction: row;
    justify-content: center;

    margin: 0 auto;
    margin: 0.8rem;
  }
`

export const SocialMediaLink = styled(OutboundLink)`
  background-color: ${props => props.theme.actionButtons.default};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 6.4rem;
  height: 6.4rem;

  margin-bottom: 1.6rem;
  outline: none;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.actionButtons.focus};
  }

  @media (max-width: 1024px) {
    margin: 0.8rem;
  }

  transition: background-color 0.15s linear;
`
