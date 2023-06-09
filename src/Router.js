import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/404";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "contacts",
        element: <Contacts />,
    }
]) 