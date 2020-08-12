import styled from "styled-components";
import logo from "../../assets/img/MagyarFlix.png";

const LogoFlix = styled.img.attrs({ src: logo, alt: "Logo da MagyarFlix" })`
  max-width: 168px;
  height: 40px;

  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

export default LogoFlix;
