import React, { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import { useFormData } from "../contexts/FormDataContext";

const FormModal = ({ editIndex, onClose }) => {
  const [showModal, setShowModal] = useState(true);
  const { formData } = useFormData();

  const handleToggleModal = () => {
    setShowModal(!showModal);
    onClose(); // Close modal on toggle
  };

  return (
    <>
      {showModal && (
        <Modal onClose={handleToggleModal}>
          <Form
            initialValues={
              editIndex !== undefined ? formData[editIndex] : undefined
            }
            onClose={handleToggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default FormModal;
