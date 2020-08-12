import styled from "styled-components";
import container from "../../styles/tools/container";
import TagMagyar from "../TagMagyar";
import TitleMagyar from "../TitleMagyar";

export const Text = styled.div`
  padding-top: 10rem;
  max-width: 45%;
  margin-left: 5%;

  ${TagMagyar} {
    margin-bottom: 40rem;
  }
  ${TitleMagyar} {
    margin-bottom: 20rem;
  }
`;

export const BannerMagyar = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 80vh;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-color: red;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
    height: auto;
    min-height: 50vh;
  }
`;
