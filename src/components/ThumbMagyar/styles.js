import styled from "styled-components";
import { WrapperAvatar } from "../AvatarMagyar/styles";

export const Timer = styled.span`
  position: absolute;
  right: var(--space);
  bottom: var(--space);
  font-size: 1.5vw;
  color: var(--color-gray-light);
  background-color: var(--color-black-medium);
  padding: 2rem 4rem;
  opacity: 0;
  transition: opacity 100ms linear;
`;

export const Title = styled.figcaption`
  position: absolute;
  left: var(--space);
  bottom: var(--space);
  font-size: 1.5vw;
  color: var(--color-gray-light);
  font-weight: 300;
  background-color: var(--color-black-medium);
  padding: 4rem 6rem;
  transform: translateY(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width: 100%;
  transition: filter 100ms linear;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border-radius: 4px;
  border: var(--border) solid var(--color-magyar);
  width: 550px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  & > ${WrapperAvatar} {
    position: absolute;
    top: var(--space);
    left: var(--space);
    margin-right: var(--space);
    transform: translateX(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear;
  }
`;

export const Background = styled.div`
  --space: 10rem;
  --border: 4rem;
  --move-space: calc(var(--space) * -1);

  margin-right: 5%;
  position: relative;

  background-color: var(--color-magyar);

  @media (max-width: 800px) {
    margin-bottom: 15rem;
    margin-right: 0;
    /* display: none; */
  }

  @media (max-width: 500px) {
    margin-bottom: 10rem;
    /* display: none; */
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: calc(var(--space) * 1.4);
    height: calc(var(--space) * 1.4);
    background-color: var(--color-magyar);
    transition: transform 100ms linear;
  }

  &::before {
    right: 0;
    top: 0;
    transform-origin: right top;
    transform: rotate(45deg) scale(0);
  }

  &::after {
    left: 0;
    bottom: 0;
    transform-origin: left bottom;
    z-index: -1;
    transform: rotate(-45deg) scale(0);
  }
  &:hover {
    &::before {
      transform: rotate(45deg) scale(1);
    }

    &::after {
      transform: rotate(-45deg) scale(1);
    }
    & > ${WrapperThumb} {
      transform: translate(var(--move-space), var(--move-space));

      & > ${Thumb} {
        filter: brightness(0.6);
      }
      & > ${WrapperAvatar} {
        transform: translateX(0);
        opacity: 1;
        transition: transform 300ms 200ms linear, opacity 300ms 200ms linear;
      }

      & > ${Title} {
        transform: translateY(0);
        opacity: 1;
        transition: transform 300ms 200ms linear, opacity 300ms 200ms linear;
      }

      & > ${Timer} {
        opacity: 1;
        transition: opacity 300ms 200ms linear;
      }
    }
  }
`;
