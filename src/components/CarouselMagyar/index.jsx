import React, { useState, useRef, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import PropTypes from "prop-types";
import {
  CarouselStyle,
  Right,
  Wrapper,
  Left,
  ShowVideo,
  ShowImage,
} from "./styles";
import TagMagyar from "../TagMagyar";
import ThumbCarousel from "../ThumbCarousel";
import ThumbMagyar from "../ThumbMagyar";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function CarouselMagyar({ category }) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const { videos } = category;

  const [move, setMove] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const winWidth = useWindowWidth();
  const $wrapper = useRef(null);

  const [VideoVisibility, setVideoVisibility] = useState(true);

  function ToggleVideoVisibility() {
    setVideoVisibility(!VideoVisibility);
  }

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
    <>
      <TagMagyar
        small
        style={{
          backgroundColor: categoryColor,
          marginBottom: "20rem",
          marginTop: "20rem",
        }}
      >
        {categoryTitle}
      </TagMagyar>
      <CarouselStyle move={move} moveLastRight={wrapperWidth - winWidth}>
        <Left onClick={actionLeft} style={{ backgroundColor: categoryColor }} />
        <Wrapper ref={$wrapper}>
          {videos.map(({ title, link }) => (
            <>
              <ShowImage
                onClick={ToggleVideoVisibility}
                isVisible={!VideoVisibility}
              >
                {VideoVisibility && (
                  <ThumbCarousel
                    key={`https://img.youtube.com/vi/${getYouTubeId(
                      link
                    )}/mqdefault.jpg`}
                    src={`https://img.youtube.com/vi/${getYouTubeId(
                      link
                    )}/mqdefault.jpg`}
                    alt={title}
                    avatar={`https://img.youtube.com/vi/${getYouTubeId(
                      link
                    )}/mqdefault.jpg`}
                    title={title}
                    channelName={title}
                    categoryColor={categoryColor}
                  />
                )}
              </ShowImage>
              <ShowVideo isVisible={!VideoVisibility}>
                {!VideoVisibility && (
                  <ThumbMagyar
                    key={title}
                    src={`https://www.youtube.com/embed/${getYouTubeId(
                      link
                    )}?autoplay=0&showinfo=0`}
                    alt={title}
                    avatar="null"
                    title={title}
                    channelName="null"
                    categoryColor={categoryColor}
                  />
                )}
              </ShowVideo>
            </>
          ))}
        </Wrapper>
        <Right
          onClick={actionRight}
          style={{ backgroundColor: categoryColor }}
        />
      </CarouselStyle>
    </>
  );
}

/* const typeVideo = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

CarouselMagyar.propTypes = {
  category: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
}; */

CarouselMagyar.propTypes = PropTypes.shape({
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      videos: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
}).isRequired;

export default CarouselMagyar;
