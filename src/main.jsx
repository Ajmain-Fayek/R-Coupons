import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import AuthStateProvider from "./Context/AuthStateProvider";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HelmetProvider>
            <AuthStateProvider>
                <RouterProvider router={routes}></RouterProvider>
            </AuthStateProvider>
        </HelmetProvider>
    </StrictMode>
);
