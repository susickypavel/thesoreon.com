import styled from "~/utils/styled"

export const TagWrapper = styled.div<{ background: string; foreground: string }>`
  display: inline-block;
  background-color: ${props => props.background};
  color: ${props => props.foreground};

  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.75px;

  border-radius: 0.4em;

  margin-right: 0.6em;

  padding: 0.6em;
`

export const TagsHolder = styled.div``
