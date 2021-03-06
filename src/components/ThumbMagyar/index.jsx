import React from "react";
import PropTypes from "prop-types";
import { WrapperThumb, Thumb, Background, Title } from "./styles";
import AvatarMagyar from "../AvatarMagyar";

function ThumbMagyar({ src, alt, avatar, channelName, title, categoryColor }) {
  return (
    <Background categoryColor={categoryColor}>
      <WrapperThumb categoryColor={categoryColor}>
        <Thumb src={src} alt={alt} showinfo="0" allowFullScreen />
        <AvatarMagyar
          photo={avatar}
          channelName={channelName}
          categoryColor={categoryColor}
        />
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
  categoryColor: PropTypes.string.isRequired,
};

export default ThumbMagyar;
