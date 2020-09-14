/* eslint-disable react/jsx-filename-extension */
import React from "react";
import CarouselMagyar from "../components/CarouselMagyar";
import initialData from "../data/initial_data.json";

export default {
  title: "CarouselMagyar",
  component: CarouselMagyar,
};

export const Default = () => (
  <CarouselMagyar category={initialData.categories[0]} />
);
