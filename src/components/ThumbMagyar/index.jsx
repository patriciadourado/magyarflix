import React from "react";
import PropTypes from "prop-types";
import { WrapperThumb, Thumb, Background, Title, Timer } from "./styles";
import AvatarMagyar from "../AvatarMagyar";

function ThumbMagyar({ src, alt, avatar, channelName, title, timer }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarMagyar photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Timer>{timer}</Timer>
      </WrapperThumb>
    </Background>
  );
}

ThumbMagyar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
};

export default ThumbMagyar;
