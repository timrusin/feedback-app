import React from "react";
// import ReactDOM  from "react-dom";
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'

ReactDOMClient.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// ReactDOM.render(
//   document.getElementById("root")
// );