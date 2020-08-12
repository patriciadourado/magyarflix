import styled from "styled-components";
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

export const CarouselStyle = styled.div`
  --space-top-bottom: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) 30rem;
  overflow: hidden;

  & > ${Background} {
    margin-right: 20rem;
  }

  & ${WrapperThumb} {
    width: 400px;
  }

  &:hover > ${Right} {
    opacity: 0.8;
  }

  & > ${Right}:hover {
    opacity: 0.9;
    transform-origin: right center;
  }
`;
