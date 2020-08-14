import styled from "styled-components";

const DescriptionMagyar = styled.p`
  font-size: 1.5vw;
  color: var(--color-gray-light);
  font-weight: 300px;
  text-align: justify;
  line-height: 1.2em;
  text-justify: center;

  @media (max-width: 800px){
    display: none;
  }
`;

export default DescriptionMagyar;
