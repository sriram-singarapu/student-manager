import React, { useState, useEffect } from "react";
import { useFormData } from "../contexts/FormDataContext";

const Form = ({ initialValues, onClose }) => {
  const { addFormData, formData, deleteFormData } = useFormData();
  const [formDataValues, setFormDataValues] = useState(
    initialValues || { name: "", email: "", number: "" }
  );

  useEffect(() => {
    setFormDataValues(initialValues || { name: "", email: "", number: "" });
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formDataValues.name ||
      !formDataValues.email ||
      !formDataValues.number
    ) {
      alert("Please fill out all fields.");
      return;
    }

    if (initialValues) {
      // Edit existing data
      const updatedFormData = [...formData];
      updatedFormData[initialValues.index] = formDataValues;
      addFormData(updatedFormData);
    } else {
      // Add new data
      addFormData(formDataValues);
    }

    onClose(); // Close the form after adding/editing data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formDataValues.name}
        onChange={handleInputChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formDataValues.email}
        onChange={handleInputChange}
      />
      <label>Mobile Number:</label>
      <input
        type="text"
        name="number"
        value={formDataValues.number}
        onChange={handleInputChange}
      />
      <button type="submit">{initialValues ? "Edit" : "Add"}</button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </form>
  );
};

export default Form;
