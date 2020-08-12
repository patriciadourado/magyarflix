import styled from "styled-components";

const DescriptionMagyar = styled.p`
  font-size: 18rem;
  color: var(--color-gray-light);
  font-weight: 300px;
  text-align: justify;
  line-height: 1.2em;

  @media (max-width: 800px){
    display: none;
  }
`;

export default DescriptionMagyar;
