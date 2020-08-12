import React from "react";
import PropTypes from "prop-types";
import { CarouselStyle, Right } from "./styles";
import ThumbMagyar from "../ThumbMagyar";

function CarouselMagyar({ videos }) {
  return (
    <CarouselStyle>
      {videos.map(({ src, alt, avatar, title, channelName, timer, link }) => (
        <ThumbMagyar
          src={src}
          alt={alt}
          avatar={avatar}
          title={title}
          channelName={channelName}
          timer={timer}
          link={link}
        />
      ))}
      <Right />
    </CarouselStyle>
  );
}

const typeVideo = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

CarouselMagyar.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
};

export default CarouselMagyar;
