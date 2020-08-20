import styled from "styled-components";
import container from "../../styles/tools/container";
import TitleMagyar from "../TitleMagyar";
import { WrapperThumb } from "../ThumbMagyar/styles";
import { Avatar, Channel } from "../AvatarMagyar/styles";
import DescriptionMagyar from "../DescriptionMagyar";

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
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 80vh;
  height: 100vh;

  /* position: relative; */

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;

    & ${WrapperThumb} {
      width: 54vw;

      & ${Avatar} {
        width: 8vw;
        height: 8vw;
      }

      & ${Channel} {
        font-size: 3vw;
      }
    }
  }

  @media (max-width: 500px) {
    height: auto;
    min-height: 50vh;

    & ${WrapperThumb} {
      width: 60vw;
    }
  }

  @media (max-width: 375px) {
    height: auto;
    min-height: 50vh;
    align-items: center;

    & ${WrapperThumb} {
      width: 65vw;
    }
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
    background-image: none;
    flex-direction: column;
    height: auto;
    min-height: 50vh;
    justify-content: center;

    & ${TitleMagyar} {
      text-align: center;
      margin-top: 50rem;
    }

    & ${DescriptionMagyar} {
      text-align: justify;
      margin-bottom: 20rem;
      font-size: 2vw;
      margin-right: 10%;
      margin-left: 10%;
    }
  }

  @media (max-width: 375px) {
    & ${TitleMagyar} {
      font-size: 15rem;
    }

    & ${DescriptionMagyar} {
      font-size: 3vw;
    }
  }
`;
