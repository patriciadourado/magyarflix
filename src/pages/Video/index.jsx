import React, { useState, useEffect } from "react";
import TagMagyar from "../../components/TagMagyar";
import HeaderOpen from "../../components/HeaderOpen";
import VideoWrapper from "./styles";
import FooterOpen from "../../components/FooterOpen";
import FormField from "../../components/FormField";
import ButtonMagyar from "../../components/ButtonMagyar";

function Video() {
  const initialValues = {
    name: "",
    description: "",
    color: "",
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infoOfEvent) {
    setValue(infoOfEvent.target.getAttribute("name"), infoOfEvent.target.value);
  }

  useEffect(() => {
    if (window.location.href.includes("localhost")) {
      const URL = "http://localhost:3000/categories";
      fetch(URL).then(async (responseOfServer) => {
        if (responseOfServer.ok) {
          const response = await responseOfServer.json();
          setCategories(response);
          return;
        }
        throw new Error("Impossible Get Data!");
      });
    }
  }, []);

  return (
    <>
      <HeaderOpen name="Back" route="/" />
      <VideoWrapper>
        <TagMagyar>Contributing Area</TagMagyar>
      </VideoWrapper>

      <form
        onSubmit={function handleSubmit(infoOfEvent) {
          infoOfEvent.preventDefault();

          setCategories([...categories, values]);

          setValues(initialValues);
        }}
      >
        <FormField
          label="Name of Category"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
      </form>
      {/* <ButtonMagyar as="a" href="/" type="submit"> */}
      <ButtonMagyar
        type="submit"
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

      <ul>
        {categories.map((category) => (
          <li key={`${category.id}`}>{category.title}</li>
        ))}
      </ul>

      <FooterOpen />
    </>
  );
}

export default Video;
