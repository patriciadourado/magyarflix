/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ThumbMagyar from "../components/ThumbMagyar";
import steve from "../assets/img/steve.jpg";
import { WrapperBanner } from "../components/BannerMagyar/styles";

export default {
  title: "ThumbMagyar",
  component: ThumbMagyar,
};

export const Default = () => (
  <WrapperBanner
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      marginTop: "20rem",
      marginLeft: "200rem",
      marginRight: "auto",
    }}
  >
    <ThumbMagyar
      src="https://www.youtube.com/embed/rs_w9cwJ1Fg?autoplay=0"
      alt="Thumb of Steve"
      avatar={steve}
      title="Budapest: The Best of Hungary"
      channelName="Rick Steves' Europe"
      frameBorder="0"
      allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  </WrapperBanner>
);
