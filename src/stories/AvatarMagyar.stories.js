/* eslint-disable react/jsx-filename-extension */
import React from "react";
import AvatarMagyar from "../components/AvatarMagyar";
import steve from "./assets/img/steve.jpg";

export default {
  title: "AvatarMagyar",
  component: AvatarMagyar,
};

export const Default = () => (
  <AvatarMagyar photo={steve} channelName="Rick Steves' Europe" />
);
