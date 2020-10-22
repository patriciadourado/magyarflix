import styled from "styled-components";
import rubik from "../../assets/rubik.gif";
import DescriptionMagyar from "../DescriptionMagyar";

const Rubikao = styled.section`
	position: fixed;
	width: 100%;
	height: 100%;
  display: flex;
  padding-top: 100px;
  justify-content: center;
  z-index: 100;
  background: url(${rubik}) var(--color-black);

  & > ${DescriptionMagyar}{
    padding-top: 200rem;
    font-size: 30rem;
    font-family: 'Press Start 2P', cursive;
  }

  @media(max-width: 800px){
    background: url(${rubik}) center no-repeat var(--color-black);
    & > ${DescriptionMagyar}{
      padding-top: 200rem;
      font-size: 15rem;
    }
  }
`;

export default Rubikao;