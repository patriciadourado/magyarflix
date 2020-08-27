import React from "react";
import PropTypes from "prop-types";
import { WrapperThumb, Thumb, Background, Title } from "./styles";
import AvatarMagyar from "../AvatarMagyar";

function ThumbMagyar({ src, alt, avatar, channelName, title }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} showinfo="0" allowFullScreen />
        <AvatarMagyar photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
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
};

export default ThumbMagyar;
