import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import AuthStateProvider from "./Context/AuthStateProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthStateProvider>
            <RouterProvider router={routes}></RouterProvider>
        </AuthStateProvider>
    </StrictMode>
);
