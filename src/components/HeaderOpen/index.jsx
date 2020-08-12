import React from "react";
import { HeaderMagyar, Wrapper } from "./styles";
import LogoFlix from "../Logo";
import ButtonMagyar from "../ButtonMagyar";

function HeaderOpen() {
  return (
    <HeaderMagyar>
      <Wrapper>
        <LogoFlix />
        <ButtonMagyar as="a" href="/video/new">
          Novo Video
        </ButtonMagyar>
      </Wrapper>
    </HeaderMagyar>
  );
}

export default HeaderOpen;
