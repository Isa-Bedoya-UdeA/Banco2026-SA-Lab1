import "./TransactionHistory.css";
import TransactionCard from "../components/cards/TransactionCard";

const transactionsBase = [
	{
		id: 1,
		origin_account: "123456789",
		receiver_account: "987654321",
		amount: 100,
		date: "2022-01-01",
	},
	{
		id: 2,
		origin_account: "123456789",
		receiver_account: "987654321",
		amount: 100,
		date: "2022-01-01",
	},
];

const TransactionHistory = () => {
	return (
		<>
			<title>Historial de Transacciones | Banco</title>
			<meta name="description" content="" />
			<meta name="keywords" content="" />
			<main className="transactionHistory">
				<div className="trasanctionHistory__container container">
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
							<p>Ver tus transacciones recientes</p>
						</div>
					</section>
					<section className="transactionHistory__body container__form">
						{transactionsBase.length > 0 ? (
							transactionsBase.map((transaction) => (
								<TransactionCard
									key={transaction.id}
									origin_account={transaction.origin_account}
									receiver_account={
										transaction.receiver_account
									}
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
