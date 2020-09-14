/* eslint-disable react/jsx-filename-extension */
import React from "react";
import FormField from "../components/FormField";
import { Category, FormMagyar } from "../pages/Video/Category";
import Data from "../data/initial_data.json";
import ButtonMagyar from "../components/ButtonMagyar";

export default {
  title: "FormField",
  component: FormField,
};

export const Default = () => (
  <>
    <FormMagyar>
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
        value=""
      />
      <FormField label="Video URL" type="text" name="url" value="" />
    </FormMagyar>
    <ButtonMagyar
      type="submit"
      onClick="Under Construction"
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
  </>
);
