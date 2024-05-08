import React from "react";

import Main from "./components/Main";
import { FormDataProvider } from "./contexts/FormDataContext";

const App = () => {
  return (
    <FormDataProvider>
      <div className="App">
        <Main />
      </div>
    </FormDataProvider>
  );
};
export default App;
