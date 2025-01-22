import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PageProvider } from "./context/PageContext.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter basename="/2025">
                <PageProvider>
                    <App />
                </PageProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
} else {
    console.error("Failed to find the root element");
}
