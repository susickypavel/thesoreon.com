import styled from "@emotion/styled"

export const BlogPostListHolder = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 3.2em;
  align-items: flex-end;

  @media (max-width: 1024px) {
    align-items: center;
  }
`

export const BlogPostListHeadline = styled.h2`
  font-size: 3.8rem;
  margin-bottom: 1.2em;
  color: white;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  & svg {
    vertical-align: top;
  }
`
