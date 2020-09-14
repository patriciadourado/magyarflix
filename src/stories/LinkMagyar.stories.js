/* eslint-disable react/jsx-filename-extension */
import React from "react";
import LinkMagyar from "../components/LinkMagyar";

export default {
  title: "LinkMagyar",
  component: LinkMagyar,
};

export const Default = () => (
  <div style={{ fontSize: "20rem" }}>
    <LinkMagyar
      href="https://patriciadourado.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Patricia Dourado
    </LinkMagyar>
  </div>
);
