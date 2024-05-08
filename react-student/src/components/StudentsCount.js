import React from "react";
import { useFormData } from "../contexts/FormDataContext";

const StudentsCount = () => {
  const { formData } = useFormData();

  return <p>All students: {formData.length}</p>;
};

export default StudentsCount;
