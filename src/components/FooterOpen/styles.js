import styled from "styled-components";
import LogoFlix from "../Logo";

const FooterMagyar = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16rem;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  padding: 20rem 0;
  border-top: 4px solid var(--color-primary-medium);

  & > ${LogoFlix} {
    margin-bottom: 10rem;
  }

  @media (max-width: 800px) {
    padding: 10rem 0 15rem;
    margin-bottom: 50rem;
  }
`;

export default FooterMagyar;
