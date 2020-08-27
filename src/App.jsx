import React from "react";
import HeaderOpen from "./components/HeaderOpen";
import BannerMagyar from "./components/BannerMagyar";
import TagMagyar from "./components/TagMagyar";
import DescriptionMagyar from "./components/DescriptionMagyar";
import bestOf from "./assets/img/best-of-buda.png";
import steve from "./assets/img/steve.jpg";
import FooterOpen from "./components/FooterOpen";
import SectionMagyar from "./components/SectionMagyar";
import CarouselMagyar from "./components/CarouselMagyar";

const videos = [
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=-0o53Ys1HIs",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
  {
    src: bestOf,
    alt: "Thumb of Steve",
    avatar: steve,
    title: "Budapest: The Best of Hungary",
    channelName: "Rick Steves' Europe",
    timer: "02:20:34",
    link: "https://www.youtube.com/watch?v=rs_w9cwJ1Fg",
  },
];

function App() {
  return (
    <>
      <HeaderOpen />

      <BannerMagyar
        bgImg={bestOf}
        url="https://www.youtube.com/watch?v=rs_w9cwJ1Fg"
        alt="Thumb of Steve"
        title="Budapest: The Best of Hungary"
        avatar={steve}
        channelName="Rick Steves' Europe"
      />

      <SectionMagyar>
        <TagMagyar>Magyar Lifestyle</TagMagyar>
        <DescriptionMagyar>
          #MagyarLifestyle is brush your teeth with beer in the morning, eat a
          lard toast and call it a snack among other peculiar way of living that
          you can taste a little bit through this Flix;
        </DescriptionMagyar>
        <TagMagyar small>Labaxuricanta lalala</TagMagyar>
        <CarouselMagyar videos={videos} />
      </SectionMagyar>

      <FooterOpen />
    </>
  );
}

export default App;
