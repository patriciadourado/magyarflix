import styled, { css } from "styled-components";

const TagMagyar = styled.h2`
  display: inline-block;
  font-size: 40rem;
  letter-spacing: 2px;
  background-color: var(--color-primary-medium);
  color: var(--color-gray-light);
  padding: 20rem 18rem;

  ${({ small }) =>
    small &&
    css`
      font-size: 25rem;
      padding: 8rem 8rem;
    `};
`;

export default TagMagyar;
