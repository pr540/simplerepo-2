// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { AppProvider } from "./context/index.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AppProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     </AppProvider>
//   </React.StrictMode>
// );

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "core-js/stable";
import "regenerator-runtime/runtime.js";
import { Provider } from "react-redux";
import store from "./Store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
