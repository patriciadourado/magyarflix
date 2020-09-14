import React from "react";
import BannerMagyar from "../components/BannerMagyar";
import steve from "./assets/img/steve.jpg";
import bestOf from "./assets/img/best-of-buda.png";

export default {
  title: "BannerMagyar",
  component: BannerMagyar,
};

export const Default = () => (
  <BannerMagyar bgImg={bestOf}
  url="https://www.youtube.com/watch?v=rs_w9cwJ1Fg"
  alt="Thumb of Steve"
  title="Budapest: The Best of Hungary"
  avatar={steve}
  channelName="Rick Steves' Europe"
  titleM="Useful guide videos about Hungary"
  description="On this Flix you can find videos about best pubs and ruin pubs,
  cheap restaurants or places to eat, hungarian traditional foods,
  drinks, beers, turistics places to visit in Budapest, a taste of
  hungarian language as Chico Buarque quote once: &quot; the only
  tongue the devil respects."
  />
);