import React from "react";
import initialData from "../../data/initial_data.json";
import HeaderOpen from "../../components/HeaderOpen";
import BannerMagyar from "../../components/BannerMagyar";
import TagMagyar from "../../components/TagMagyar";
import DescriptionMagyar from "../../components/DescriptionMagyar";
import bestOf from "../../assets/img/best-of-buda.png";
import steve from "../../assets/img/steve.jpg";
import FooterOpen from "../../components/FooterOpen";
import SectionMagyar from "../../components/SectionMagyar";
import CarouselMagyar from "../../components/CarouselMagyar";

function Home() {
  return (
    <>
      <HeaderOpen name="New Video" route="video/new" />

      <BannerMagyar
        bgImg={bestOf}
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
        tongue the devil respects.&quot;"
      />

      <SectionMagyar>
        <TagMagyar>Magyar Lifestyle</TagMagyar>
        <DescriptionMagyar>
          #MagyarLifestyle is brush your teeth with beer in the morning, eat a
          lard toast and call it a snack among other peculiar way of living that
          you can taste a little bit through this Flix;
        </DescriptionMagyar>
        <CarouselMagyar category={initialData.categories[0]} />
        <CarouselMagyar category={initialData.categories[1]} />
        <CarouselMagyar category={initialData.categories[2]} />
        <CarouselMagyar category={initialData.categories[3]} />
        <CarouselMagyar category={initialData.categories[4]} />
        <CarouselMagyar category={initialData.categories[5]} />
        <CarouselMagyar category={initialData.categories[6]} />
        <CarouselMagyar category={initialData.categories[7]} />
        <CarouselMagyar category={initialData.categories[8]} />
      </SectionMagyar>

      <FooterOpen />
    </>
  );
}

export default Home;
