import React, { useState } from "react";
import PropTypes from "prop-types";
import ThumbMagyar from "../ThumbMagyar";
import { Thumb } from "../ThumbMagyar/styles";
import TitleMagyar from "../TitleMagyar";
import DescriptionMagyar from "../DescriptionMagyar";
import {
  WrapperBanner,
  BannerStyle,
  Text,
  Watch,
  WrapperVideo,
} from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function BannerMagyar({
  bgImg,
  url,
  alt,
  title,
  channelName,
  avatar,
  titleM,
  description,
}) {
  const youTubeID = getYouTubeId(url);
  const [VideoVisibility, setVideoVisibility] = useState(true);

  function ToggleVideoVisibility() {
    setVideoVisibility(!VideoVisibility);
  }

  return (
    <BannerStyle>
      <WrapperBanner bgImg={bgImg} title={title} isVisible={VideoVisibility}>
        <Text>
          <TitleMagyar>{titleM}</TitleMagyar>
          <DescriptionMagyar>{description}</DescriptionMagyar>
        </Text>
        <Watch onClick={ToggleVideoVisibility}>Watch it</Watch>
        <ThumbMagyar
          src={`https://www.youtube.com/embed/${youTubeID}?autoplay=0&showinfo=0`}
          alt={alt}
          avatar={avatar}
          title={title}
          channelName={channelName}
          categoryColor="#009b14"
          frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </WrapperBanner>
      <WrapperVideo isVisible={!VideoVisibility}>
        <Thumb
          src={`https://www.youtube.com/embed/${youTubeID}?autoplay=0&showinfo=0`}
          alt={alt}
          allowFullScreen
          allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </WrapperVideo>
    </BannerStyle>
  );
}

BannerMagyar.propTypes = {
  bgImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  titleM: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BannerMagyar;
