import { useState } from "react";
import "./TransactionHistory.css";
import TransactionCard from "../components/cards/TransactionCard";

const TransactionHistory = () => {

	const [transactions, setTransactions] = useState([]);
	const [accountNumber, setAccountNumber] = useState("");

	const handleSearch = async (e) => {
		e.preventDefault();

		if (!accountNumber) {
			alert("Ingrese un número de cuenta");
			return;
		}

		try {

			const response = await fetch(
				`http://localhost:8080/api/transactions/${accountNumber}`
			);

			if (!response.ok) {
				throw new Error("Error obteniendo transacciones");
			}

			const data = await response.json();

			const formattedTransactions = data.map((t) => ({
				id: t.id,
				origin_account: t.senderAccountNumber,
				receiver_account: t.receiverAccountNumber,
				amount: t.amount,
				date: t.timestamp
			}));

			setTransactions(formattedTransactions);

		} catch (error) {

			console.error("Error cargando transacciones:", error);
			alert("No se pudieron cargar las transacciones");

		}
	};

	return (
		<>
			<title>Historial de Transacciones | Banco</title>

			<main className="transactionHistory">

				<div className="transactionHistory__container container">

					<section className="transactionHistory__header container__header">

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<g
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							>
								<path d="M21 12a9 9 0 0 0-9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" />
								<path d="M3 3v5h5m-5 4a9 9 0 0 0 9 9a9.75 9.75 0 0 0 6.74-2.74L21 16" />
								<path d="M16 16h5v5" />
							</g>
						</svg>

						<div>
							<h1>Historial de Transacciones</h1>
							<p>Consulta las transacciones de una cuenta</p>
						</div>

					</section>


					<form
						className="transactionHistory__search container__form"
						onSubmit={handleSearch}
					>

						<div className="form_group">

							<label htmlFor="account_search">
								Número de Cuenta
							</label>

							<input
								type="text"
								id="account_search"
								placeholder="Ej: 123456789"
								value={accountNumber}
								onChange={(e) => setAccountNumber(e.target.value)}
							/>

							<p className="error">Ingrese el número de cuenta para buscar</p>

						</div>


						<button className="TransactionButton" type="submit">

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m21 21l-4.3-4.3m1.8-5.2a7 7 0 1 1-14 0a7 7 0 0 1 14 0"
								/>
							</svg>

							<span>Buscar Transacciones</span>

						</button>

					</form>


					<section className="transactionHistory__body container__form">

						{transactions.length > 0 ? (
							transactions.map((transaction) => (
								<TransactionCard
									key={transaction.id}
									origin_account={transaction.origin_account}
									receiver_account={transaction.receiver_account}
									amount={transaction.amount}
									date={transaction.date}
								/>
							))
						) : (
							<p className="error">No hay transacciones</p>
						)}

					</section>

				</div>

			</main>
		</>
	);
};

export default TransactionHistory;