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
    width: 54vw;
    max-width: 820;
    font-size: 20rem;
    margin: 0 auto 10rem;
  }

  @media (max-width: 800px) {
    & ${DescriptionMagyar} {
      text-align: justify;
      margin-bottom: 20rem;
      font-size: 2vw;
      margin-right: 10%;
      margin-left: 10%;
      width: auto;
    }

    & > ${TagMagyar} {
      font-size: 13rem;
      display: inline-block;
    }
  }

  @media (max-width: 375px) {
    & ${DescriptionMagyar} {
      font-size: 3vw;
    }
  }
`;

export default SectionMagyar;
