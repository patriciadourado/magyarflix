import React from "react";
import TagMagyar from "../../components/TagMagyar";
import HeaderOpen from "../../components/HeaderOpen";
import VideoWrapper from "./styles";

function Video() {
  return (
    <>
      <HeaderOpen name="Back" route="/" />
      <VideoWrapper>
        <TagMagyar>Contributing Area</TagMagyar>
      </VideoWrapper>
    </>
  );
}

export default Video;
