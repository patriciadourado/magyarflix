import React from "react";
import PropTypes from "prop-types";
import { Avatar, Channel, WrapperAvatar } from "./styles";

function AvatarMagyar({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}

AvatarMagyar.propTypes = {
  photo: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

export default AvatarMagyar;
