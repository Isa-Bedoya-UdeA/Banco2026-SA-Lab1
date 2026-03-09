import { lazy } from "react";
import { PATHS } from "../consts/routes";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <Layout />,
        errorElement: <div>¡Ups! Algo salió mal.</div>,
        children: [
            { index: true, element: <Suspense fallback="..."><Home /></Suspense> },
            { path: "*", element: <NotFound /> }
        ]
    }
])