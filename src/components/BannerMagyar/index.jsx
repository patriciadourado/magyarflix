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

function BannerMagyar({ bgImg, url, alt, title, channelName, avatar }) {
  const youTubeID = getYouTubeId(url);
  const [VideoVisibility, setVideoVisibility] = useState(true);

  function ToggleVideoVisibility() {
    setVideoVisibility(!VideoVisibility);
  }

  return (
    <BannerStyle>
      <WrapperBanner bgImg={bgImg} title={title} isVisible={VideoVisibility}>
        <Text>
          <TitleMagyar>Useful guide videos about Hungary</TitleMagyar>
          <DescriptionMagyar>
            On this Flix you can find videos about best pubs and ruin pubs,
            cheap restaurants or places to eat, hungarian traditional foods,
            drinks, beers, turistics places to visit in Budapest, a taste of
            hungarian language as Chico Buarque quote once: &quot; the only
            tongue the devil respects.&quot;
          </DescriptionMagyar>
        </Text>
        <Watch onClick={ToggleVideoVisibility}>Watch it</Watch>
        <ThumbMagyar
          src={`https://www.youtube.com/embed/${youTubeID}?autoplay=0&showinfo=0`}
          alt={alt}
          avatar={avatar}
          title={title}
          channelName={channelName}
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
};

export default BannerMagyar;
