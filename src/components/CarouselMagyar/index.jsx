import React, { useState, useRef, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import PropTypes from "prop-types";
import { CarouselStyle, Right, Wrapper, Left } from "./styles";
import ThumbMagyar from "../ThumbMagyar";

function CarouselMagyar({ videos }) {
  const [move, setMove] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const winWidth = useWindowWidth();
  const $wrapper = useRef(null);

  useEffect(
    () => setWrapperWidth($wrapper.current.getBoundingClientRect().width),
    []
  );

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }

  function actionLeft() {
    setMove((oldMove) => oldMove + 1);
  }

  return (
    <CarouselStyle move={move} moveLastRight={wrapperWidth - winWidth}>
      <Left onClick={actionLeft} />
      <Wrapper ref={$wrapper}>
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
