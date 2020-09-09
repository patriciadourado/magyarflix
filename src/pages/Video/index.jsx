import React from "react";
import TagMagyar from "../../components/TagMagyar";
import HeaderOpen from "../../components/HeaderOpen";
import VideoWrapper from "./styles";
import FooterOpen from "../../components/FooterOpen";
import FormField from "../../components/FormField";
import ButtonMagyar from "../../components/ButtonMagyar";
import Data from "../../data/initial_data.json";
import { Category, FormMagyar } from "./Category";
import useForm from "./useForm";

function Video() {
  const { handleChange, values } = useForm({
    description: "",
    url: "",
  });
  
  /*
  function matchYoutubeUrl(url) {
    const p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
      return url.match(p)[1];
    }
    return false;
  }*/

  function underConstruction() {
    alert("This Area is Under Construction! Return later! :)");
  }

  return (
    <>
      <HeaderOpen name="Back" route="/" />
      <VideoWrapper>
        <TagMagyar>Contributing Area</TagMagyar>
      </VideoWrapper>

      <FormMagyar onSubmit={handleChange}>
        <Category>
          {Data.categories.map((category) => {
            return (
              <option key={category.title} value={category.title}>
                {category.title}
              </option>
            );
          })}
        </Category>

        <FormField
          label="Video Description"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Video URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
      </FormMagyar>
      {/* <ButtonMagyar as="a" href="/" type="submit"> */}
      <ButtonMagyar
        type="submit"
        onClick={() => underConstruction()}
        style={{
          fontSize: "15rem",
          width: "100px",
          padding: "5rem",
          marginBottom: "20rem",
          marginRight: "20rem",
          alignSelf: "flex-end",
        }}
      >
        Register
      </ButtonMagyar>
      <FooterOpen />
    </>
  );
}

export default Video;
