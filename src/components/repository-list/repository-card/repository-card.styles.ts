import styled from "@emotion/styled"

export const RepositoryHolder = styled.div`
  border: 1px solid gray;
  max-width: 500px;
  width: 100%;
  padding: 0.8em;
  height: 200px;
  background: black;
  color: white;

  display: flex;
  flex-flow: column wrap;
  align-items: center;

  position: relative;

  margin-bottom: 1.6em;
`

const LINK_HEIGHT = 50

export const LinkToRepository = styled.a`
  color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  background: black;
  width: 250px;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  height: ${LINK_HEIGHT}px;

  position: absolute;
  bottom: -${LINK_HEIGHT / 2}px;
  border: 1px solid gray;
  overflow: hidden;

  & span {
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    transition: transform 0.5s ease-in-out;
  }

  &:hover span:first-of-type,
  &:focus span:first-of-type {
    transform: translateY(-325%);
  }

  & span:last-of-type {
    transform: translateY(250%);

    & svg {
      vertical-align: top;
    }
  }

  &:hover span:last-of-type,
  &:focus span:last-of-type {
    transform: translateY(-50%);
  }
`

export const RepositoryName = styled.h2`
  text-align: center;
  padding: 0.8em 0;
  font-size: 2.4rem;
`

export const RepositoryDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
`

export const TechnologiesHolder = styled.div`
  margin: 0.8em;
`
