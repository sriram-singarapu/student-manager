import React from "react";
import { useFormData } from "../contexts/FormDataContext";
import FormModal from "./FormModal";

const FormDataList = () => {
  const { formData, deleteFormData } = useFormData();

  const handleDelete = (index) => {
    deleteFormData(index);
  };

  const handleEdit = (index) => {
    // Open modal for editing specific data
    // Pass index to identify the item being edited
    <FormModal editIndex={index} onClose={() => handleEdit(null)} />;
  };

  return (
    <div>
      <h2>Submitted Data:</h2>
      <ul>
        {formData.map((data, index) => (
          <li key={index}>
            <strong>Name:</strong> {data.name}, <strong>Email:</strong>{" "}
            {data.email}, <strong>Mobile Number:</strong> {data.number}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormDataList;
