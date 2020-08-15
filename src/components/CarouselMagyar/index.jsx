import React, { useState } from "react";
import PropTypes from "prop-types";
import { CarouselStyle, Right, Wrapper, Left } from "./styles";
import ThumbMagyar from "../ThumbMagyar";

function CarouselMagyar({ videos }) {
  const [move, setMove] = useState(0);

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }

  function actionLeft(){
    setMove((oldMove) => oldMove + 1);
  }

  return (
    <CarouselStyle>
      <Left onClick={actionLeft} />
      <Wrapper move={move}>
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
      </Wrapper>
      <Right onClick={actionRight} />
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
