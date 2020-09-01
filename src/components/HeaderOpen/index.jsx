import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HeaderMagyar, Wrapper } from "./styles";
import LogoFlix from "../Logo";
import ButtonMagyar from "../ButtonMagyar";

function HeaderOpen({ name, route }) {
  return (
    <HeaderMagyar>
      <Wrapper>
        <Link to="/">
          <LogoFlix />
        </Link>
        <ButtonMagyar as="a" href={route}>
          {name}
        </ButtonMagyar>
      </Wrapper>
    </HeaderMagyar>
  );
}

HeaderOpen.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default HeaderOpen;
