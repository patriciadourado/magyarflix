import styled, { keyframes } from "styled-components";
import rubik from "../../assets/rubik.gif";
import DescriptionMagyar from "../DescriptionMagyar";

const fade = keyframes`
  0%{ 
    opacity: 1; 
  }
  
  50%{
    opacity: 1;
  }

  100%{ 
    opacity: 0; 
  }
`;

const Rubikao = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  z-index: 100;
  background: url(${rubik}) var(--color-black);
  animation: ${fade} 8s infinite;

  & > ${DescriptionMagyar} {
    padding-top: 200rem;
    font-size: 30rem;
    font-family: "Press Start 2P", cursive;
  }

  @media (max-width: 800px) {
    background: url(${rubik}) center no-repeat var(--color-black);
    & > ${DescriptionMagyar} {
      padding-top: 200rem;
      font-size: 15rem;
    }
  }
`;

export default Rubikao;
