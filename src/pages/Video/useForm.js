import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleChange = (event) => {
    setValue(
      event.target.getAttribute("name"), // field name
      event.target.value // value on input
    );
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
};

export default useForm;
