import React from "react";
import HeaderOpen from "./components/HeaderOpen";
import { BannerMagyar, Text } from "./components/BannerMagyar";
import TagMagyar from "./components/TagMagyar";
import TitleMagyar from "./components/TitleMagyar";
import DescriptionMagyar from "./components/DescriptionMagyar";
import ThumbMagyar from "./components/ThumbMagyar";
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

      <BannerMagyar>
        <Text>
          <TagMagyar>Magyarország</TagMagyar>
          <TitleMagyar>Useful guide videos about Hungary</TitleMagyar>
          <DescriptionMagyar>
            On this Flix you can find videos about best pubs and ruin pubs,
            cheap restaurants or places to eat, hungarian traditional foods,
            drinks, beers, turistics places to visit in Budapest, a taste of
            hungarian language as Chico Buarque quote once: &quot; the only
            tongue the devil respects.&quot;
          </DescriptionMagyar>
        </Text>
        <ThumbMagyar
          src={bestOf}
          alt="Thumb of Steve"
          avatar={steve}
          title="Budapest: The Best of Hungary"
          channelName="Rick Steves' Europe"
          timer="02:20:34"
        />
      </BannerMagyar>

      <SectionMagyar>
        <TagMagyar>Magyar Lifestyle</TagMagyar>
        <DescriptionMagyar>
          #MagyarLifestyle is a peculiar way of living and you can taste a
          little bit of it through this Flix;
        </DescriptionMagyar>
        <TagMagyar small>Labaxuricanta lalala</TagMagyar>
        <CarouselMagyar videos={videos} />
      </SectionMagyar>

      <FooterOpen />
    </>
  );
}

export default App;
