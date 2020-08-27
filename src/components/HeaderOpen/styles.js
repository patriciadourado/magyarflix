import styled from "styled-components";
import ButtonMagyar from "../ButtonMagyar";
import LogoFlix from "../Logo";

export const HeaderMagyar = styled.header`
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary-medium);
  padding: 20rem 30rem;

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;

    & > ${LogoFlix} {
      height: 35px;
    }

    & > ${ButtonMagyar} {
      background-color: var(--color-primary-medium);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      z-index: 2;
    }

    & > ${ButtonMagyar}::after {
      content: ''; 
    }
  }
`;
