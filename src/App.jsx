import React from "react";
import HeaderOpen from "./components/HeaderOpen";
import { WrapperBanner, BannerMagyar, Text, Watch } from "./components/BannerMagyar";
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
        <WrapperBanner backgroundImage={bestOf}>
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
          <Watch>Assistir</Watch>
          <ThumbMagyar
            src={bestOf}
            alt="Thumb of Steve"
            avatar={steve}
            title="Budapest: The Best of Hungary"
            channelName="Rick Steves' Europe"
            timer="02:20:34"
          />
        </WrapperBanner>
      </BannerMagyar>

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
