import styled from "styled-components";
import TagMagyar from "../TagMagyar";
import DescriptionMagyar from "../DescriptionMagyar";

const SectionMagyar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50rem;

  & > ${TagMagyar} {
    margin-bottom: 40rem;
    margin-top: 50rem;
    font-size: 30rem;
  }

  & > ${TagMagyar}:not(:first-child) {
    margin-left: 30rem;
    align-self: flex-start;
  }

  & > ${DescriptionMagyar} {
    width: 600px;
    max-width: 820;
    margin: 0 auto 10rem;
  }
`;

export default SectionMagyar;
