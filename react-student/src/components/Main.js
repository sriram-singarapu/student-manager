import React from "react";
import FormModal from "./FormModal";
import StudentsCount from "./StudentsCount";
import FormDataList from "./FormDataList";

const Main = () => {
  return (
    <div>
      <h1>Student Manager</h1>
      <StudentsCount />
      <FormModal />
      <FormDataList />
    </div>
  );
};

export default Main;
