import styled from "styled-components";

const ButtonMagyar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 12rem 30rem;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  border-radius: 4px;
  font-size: 20rem;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #fb0404, #e1d8ff, #009b14);
    /* background-color: var(--color-primary-medium); */
    transform-origin: bottom left;
    transform: translateX(100%) scaleX(1.5) skew(-30deg);
    transition: transform 200ms linear;
  }

  &::after {
    content: '${({ children }) => children}';
    position: absolute;
  } 

  &:hover::before {     
    transform: translateX(-30%) scaleX(1.5) skew(-30deg);
  }

  &:active::after{
    transform: scale(2);
  }

`;

export default ButtonMagyar;
