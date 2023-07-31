import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SearchContextProvider } from "./context/SearchContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { RegisterContextProvider } from "./context/RegisterContext.jsx";
import { GlobalContextProvider } from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RegisterContextProvider>
        <AuthContextProvider>
          <SearchContextProvider>
            <App />
          </SearchContextProvider>
        </AuthContextProvider>
      </RegisterContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
