import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <BrowserRouter>
    <React.StrictMode>
      <App/>
      </React.StrictMode>
    </BrowserRouter>
);
