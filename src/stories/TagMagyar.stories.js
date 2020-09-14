/* eslint-disable react/jsx-filename-extension */
import React from "react";
import TagMagyar from "../components/TagMagyar";

export default {
  title: "TagMagyar",
  component: TagMagyar,
};

export const Default = () => (
  <>
    <TagMagyar>Magyar Lifestyle </TagMagyar>
    <div style={{ paddingTop: "10rem" }}>
      <TagMagyar small>Magyar Lifestyle</TagMagyar>
    </div>
  </>
);
