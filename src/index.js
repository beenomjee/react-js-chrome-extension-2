/*global chrome*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
