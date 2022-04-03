import React from "react";
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'

//this is the new way of rendering the root from Index.html with react18
ReactDOMClient.createRoot
(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
