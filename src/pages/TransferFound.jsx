import "./TransferFound.css";

const TransferFound = () => {
	return (
		<>
			<title>Transferir Fondos | Banco</title>
			<meta name="description" content="" />
			<meta name="keywords" content="" />
			<main className="transferFound">
				<section className="transferFound__header">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
						/>
					</svg>
					<div>
						<h1>Transferir Fondos</h1>
						<p>Envíe dinero de forma rápida y segura</p>
					</div>
				</section>
				<form className="transferFound__body">
					<div className="form_group">
						<label htmlFor="origin_account">Cuenta de Origen</label>
						<input
							type="text"
							placeholder="Número de cuenta origen"
							name="origin_account"
							id="origin_account"
						/>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zM9 4h6"
						/>
					</svg>
					<div className="form_group">
						<label htmlFor="receiver_account">
							Cuenta de Destino
						</label>
						<input
							type="text"
							placeholder="Número de cuenta destino"
							name="receiver_account"
							id="receiver_account"
						/>
					</div>
					<div className="form_group">
						<label htmlFor="amount">Monto (USD)</label>
						<input
							type="number"
							placeholder="0.00"
							name="amount"
							id="amount"
						/>
					</div>
					<button type="submit">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
							/>
						</svg>
						<span>Realizar Transferencia</span>
					</button>
				</form>
			</main>
		</>
	);
};

export default TransferFound;
