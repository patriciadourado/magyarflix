import styled from "styled-components";
import container from "../../styles/tools/container";
import TitleMagyar from "../TitleMagyar";
import { WrapperThumb, Thumb } from "../ThumbMagyar/styles";
import DescriptionMagyar from "../DescriptionMagyar";

export const Text = styled.div`
  margin-left: 5%;
  margin-right: 5%;

  ${TitleMagyar} {
    margin-bottom: 20rem;
  }
`;

export const WrapperVideo = styled.section`
  padding-top: 10rem;
  align-items: center;
  height: 80vh;
  position: relative;
  display: none;

  @media (max-width: 800px) {
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    flex-direction: column-reverse;
    height: auto;
    min-height: 70vw;
    justify-content: flex-end;
  }

  & ${Thumb} {
    height: 60vw;
  }
`;

export const Watch = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 6rem 11rem;
  margin-top: 1rem;
  background-color: var(--color-gray-light);
  color: var(--color-black-dark);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-size: 15rem;
  font-weight: bold;
  cursor: pointer;
`;

export const BannerStyle = styled.section`
  ${container};
  display: contents;
  justify-content: space-between;
  align-items: center;
  max-height: 80vh;
  height: 100vh;

  @media (max-width: 800px) {
    height: auto;
    min-height: 80vw;

    & ${WrapperThumb} {
      display: none;
      width: 54vw;
    }
  }

  @media (max-width: 500px) {
    height: auto;
    min-height: 50vh;
  }

  @media (max-width: 375px) {
    height: auto;
    min-height: 50vh;
  }
`;

export const WrapperBanner = styled.section`
  padding-top: 10rem;
  align-items: center;
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-size: cover;
  background-position: center;
  display: flex;

  @media (max-width: 800px) {
    display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
    flex-direction: column;
    height: auto;
    min-height: 70vw;
    justify-content: flex-end;

    & ${TitleMagyar} {
      visibility: hidden;
    }

    & ${TitleMagyar}:after {
      content: ${({ title }) => `"${title}"`};
      letter-spacing: 1rem;
      font-family: "Roboto";
      text-transform: uppercase;
      visibility: visible;
      display: block;
      text-align: center;
      font-size: 20rem;
    }

    & ${Watch} {
      display: flex;
    }

    & ${DescriptionMagyar} {
      display: none;
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
