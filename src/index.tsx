import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Root DOM element where the React application will be mounted.
 */
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

/**
 * Renders the main App component into the DOM.
 */
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/**
 * Initializes web vitals reporting for performance monitoring in Vercel.
 */
reportWebVitals(console.log);
