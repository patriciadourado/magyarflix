import styled, { css } from "styled-components";
import { WrapperThumb, Background, Timer, Title } from "../ThumbMagyar/styles";
import arrow from "../../assets/img/arrow.svg";
import { Avatar, Channel } from "../AvatarMagyar/styles";

const thumbWidth = 400;
const spaceRight = 20;
const spaceRightLeft = 30;

export const Wrapper = styled.div`
  --space-right: ${spaceRight}rem;
  display: flex;
  transition: transform 200ms linear;
  & > ${Background} {
    margin-right: var(--space-right);
  }
`;

const Arrow = css`
  position: absolute;
  height: calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-red);
  opacity: 0;
  border: none;
  transition: opacity 200ms linear, transform 200ms linear;
  z-index: 1;
  cursor: pointer;
  &::after {
    content: url(${arrow});
    display: block;
    opacity: 1;
    transition: transform 100ms linear;
  }
`;

export const Right = styled.button`
  ${Arrow};
  right: 0;
  &::after {
    transform: rotate(-90deg);
  }
  &:hover::after {
    transform: scale(1.2) rotate(-90deg);
  }
  &:active::after {
    transform: rotate(-90deg) scale(1.2) translateY(4rem);
  }
`;

export const Left = styled.button`
  ${Arrow};
  left: 0;
  &::after {
    transform: rotate(90deg);
  }
  &:hover::after {
    transform: scale(1.2) rotate(90deg);
  }
  &:active::after {
    transform: rotate(90deg) scale(1.2) translateY(4rem);
  }
`;

function moveCarousel(move, moveLastRight) {
  const oneStep = (thumbWidth + spaceRight) * move;
  const lastStep = (moveLastRight + spaceRightLeft) * -1;
  if (oneStep !== 0 && oneStep < lastStep) {
    return css`
      & > ${Wrapper} {
        transform: translateX(${lastStep}px);
      }
      &:hover > ${Right} {
        display: none;
        opacity: 0;
      }
    `;
  }

  return css`
    & > ${Wrapper} {
      transform: translateX(${oneStep}px);
    }
  `;
}

function leftShow(move) {
  return move < 0;
}

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  --space-right-left: ${spaceRightLeft}rem;
  --thumb-width: ${thumbWidth}px;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) var(--space-right-left);
  overflow: hidden;
  & ${WrapperThumb} {
    width: var(--thumb-width);
    box-sizing: border-box;
  }
  &:hover > ${Right} {
    display: block;
    opacity: 0.8;
  }
  &:hover > ${Left} {
    ${({ move }) =>
      leftShow(move)
        ? css`
            display: block;
            opacity: 0.8;
          `
        : css`
            display: none;
            opacity: 0;
          `}
  }
  & > ${Right}:hover {
    opacity: 0.9;
    transform-origin: right center;
  }
  ${({ move, moveLastRight }) => moveCarousel(move, moveLastRight)}

  @media (max-width: 800px) {
    & ${WrapperThumb} {
      /* width: 70vw; */
      box-sizing: border-box;

      & ${Title}, & ${Timer} {
        font-size: 4vw;
      }

      & ${Avatar} {
        width: 8vw;
        height: 8vw;
      }

      & ${Channel} {
        font-size: 4vw;
      }

    }

    & ${Right}, & ${Left} {
      width: 40rem;
    }
  }
`;
