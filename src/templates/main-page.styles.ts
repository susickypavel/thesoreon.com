import styled from "@emotion/styled"

export const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > * {
    flex: 1 0 50%;
  }

  @media (max-width: 1024px) {
    flex-flow: column wrap;
  }
`
