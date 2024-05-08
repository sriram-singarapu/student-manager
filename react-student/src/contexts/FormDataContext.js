import React, { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  const addFormData = (data) => {
    setFormData([...formData, data]);
  };

  const deleteFormData = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  };

  return (
    <FormDataContext.Provider value={{ formData, addFormData, deleteFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
