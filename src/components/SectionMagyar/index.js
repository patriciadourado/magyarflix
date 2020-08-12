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
  }

  & > ${TagMagyar}:not(:first-child) {
    margin-left: 30rem;
    align-self: flex-start;
  }

  & > ${DescriptionMagyar} {
    max-width: 820;
    margin: 0 auto 40rem;
  }
`;

export default SectionMagyar;
