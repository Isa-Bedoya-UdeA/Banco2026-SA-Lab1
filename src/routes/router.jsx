import { lazy, Suspense } from "react";
import { PATHS } from "../consts/routes";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Layout from "../components/layout/Layout"

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