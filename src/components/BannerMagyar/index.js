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

  &:hover {
    color: var(--color-black);
    font-style: bold;
  }
`;

export const BannerMagyar = styled.section`
  ${container};
  display: contents;
  justify-content: space-between;
  align-items: center;
  max-height: 80vh;
  height: 100vh;

  /* position: relative; */

  @media (max-width: 800px) {
    height: auto;
    min-height: 80vw;

    & ${WrapperThumb} {
      display: none;
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
    flex-direction: column;
    height: auto;
    min-height: 70vw;
    justify-content: flex-end;

    & ${TitleMagyar} {
      visibility: hidden;
    }

    & ${TitleMagyar}:after {
      content: "Budapest: The Best of Hungary";
      letter-spacing: 1rem;
      font-family: "Roboto";
      text-transform: uppercase;
      visibility: visible;
      /* position: absolute; */
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
