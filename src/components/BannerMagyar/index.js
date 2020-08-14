import styled from "styled-components";
import container from "../../styles/tools/container";
import TitleMagyar from "../TitleMagyar";

export const Text = styled.div`
  /* max-width: 45%; */
  margin-left: 5%;
  margin-right: 5%;

  ${TitleMagyar} {
    margin-bottom: 20rem;
  }

  @media (max-width: 800px) {
  }
`;

export const BannerMagyar = styled.section`
  /* ${container}; */
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  
  max-height: 80vh;
  height: 100vh;
  
  position: relative;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    min-height: 50vh;
  }
`;

export const WrapperBanner = styled.section`
  padding-top: 10rem;
  align-items: center;
  height: 80vh;
  display: flex;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;
