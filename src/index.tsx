import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Root DOM element where the React application will be mounted.
 * 
 * This element is created by ReactDOM.createRoot() and serves as the
 * container for the entire React application tree.
 */
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

/**
 * Renders the main App component into the DOM.
 * 
 * The application is wrapped in React.StrictMode for development-time
 * checks and warnings. This helps identify potential problems in the
 * application during development.
 */
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/**
 * Initializes web vitals reporting for performance monitoring.
 * 
 * This function call sets up performance monitoring that will log
 * Core Web Vitals metrics to the console, helping to track
 * application performance in development.
 */
reportWebVitals(console.log);
