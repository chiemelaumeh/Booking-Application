import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { RegisterContextProvider } from "./context/RegisterContext.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { AddPropertyContextProvider } from "./context/AddPropertyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddPropertyContextProvider>
      <GlobalContextProvider>
        <RegisterContextProvider>
          <AuthContextProvider>
            <SearchContextProvider>
              <App />
            </SearchContextProvider>
          </AuthContextProvider>
        </RegisterContextProvider>
      </GlobalContextProvider>
    </AddPropertyContextProvider>
  </React.StrictMode>
);
