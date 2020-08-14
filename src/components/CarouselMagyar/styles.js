import styled, { css } from "styled-components";
import { WrapperThumb, Background } from "../ThumbMagyar/styles";
import arrow from "../../assets/img/arrow.svg";

export const Right = styled.button`
  position: absolute;
  height: calc(100% - var(--space-top-bottom) * 2);
  width: 50rem;
  background-color: var(--color-red);
  right: 0;
  opacity: 0;
  border: none;
  transition: opacity 200ms linear, transform 200ms linear;
  cursor: pointer;

  &::after {
    content: url(${arrow});
    opacity: 1;
    transform: rotate(-90deg);
    display: block;
    transition: transform 100ms linear;
  }

  &:hover::after {
    transform: scale(1.2) rotate(-90deg);
  }

  &:active::after {
    transform: rotate(-90deg) scale(1.2) translateY(4rem);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  transition: transform 200ms linear;

  & > ${Background} {
    margin-right: 20rem;
  }

  ${({ moveRight }) =>
    moveRight &&
    css`
      transform: translateX(calc(var(--thumb-width) * ${moveRight} * -1));
    `}
`;

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  --thumb-width: 400px;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) 30rem;
  overflow: hidden;

  & ${WrapperThumb} {
    var(--thumb-width); 
  }

  &:hover > ${Right} {
    opacity: 0.8;
  }

  & > ${Right}:hover {
    opacity: 0.9;
    transform-origin: right center;
  }
`;
