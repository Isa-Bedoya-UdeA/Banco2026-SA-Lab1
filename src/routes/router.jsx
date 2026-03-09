import { lazy, Suspense } from "react";
import { PATHS } from "../consts/routes";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Layout from "../components/layout/Layout";
import CreateAccountForm from "../pages/CreateAccountForm";
import TransferFound from "../pages/TransferFound";
import TransactionHistory from "../pages/TransactionHistory";

const Home = lazy(() => import("../pages/Home"));

export const router = createBrowserRouter([
	{
		path: PATHS.HOME,
		element: <Layout />,
		errorElement: <div>¡Ups! Algo salió mal.</div>,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback="...">
						<Home />
					</Suspense>
				),
			},
			{
				path: PATHS.CREATE_ACCOUNT,
				element: (
					<Suspense fallback="...">
						<CreateAccountForm />
					</Suspense>
				),
			},
			{ path: PATHS.TRANSFER_FOUND, element: <TransferFound /> },
			{
				path: PATHS.TRANSACTION_HISTORY,
				element: <TransactionHistory />,
			},
			{ path: "*", element: <NotFound /> },
		],
	},
]);
