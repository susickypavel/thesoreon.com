import styled from "@emotion/styled"

export const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;

  & > * {
    flex: 1 0 50%;
  }

  @media (max-width: 1024px) {
    flex-flow: column wrap;
  }
`
