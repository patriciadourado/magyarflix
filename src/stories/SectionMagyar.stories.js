/* eslint-disable react/jsx-filename-extension */
import React from "react";
import SectionMagyar from "../components/SectionMagyar";
import TagMagyar from "../components/TagMagyar";
import DescriptionMagyar from "../components/DescriptionMagyar";
import CarouselMagyar from "../components/CarouselMagyar";
import initialData from "../data/initial_data.json";

export default {
  title: "SectionMagyar",
  component: SectionMagyar,
};

export const Default = () => (
  <SectionMagyar>
    <TagMagyar>Magyar Lifestyle</TagMagyar>
    <DescriptionMagyar>
      #MagyarLifestyle is brush your teeth with beer in the morning, eat a lard
      toast and call it a snack among other peculiar way of living that you can
      taste a little bit through this Flix;
    </DescriptionMagyar>
    <CarouselMagyar category={initialData.categories[0]} />
  </SectionMagyar>
);
