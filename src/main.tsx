import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter basename="/2025">
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    console.error("Failed to find the root element");
}
