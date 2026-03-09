import "./createAccountForm.css";

const CreateAccount = () => {
	return (
		<>
			<title>Crear una cuenta | Banco</title>
			<meta name="description" content="" />
			<meta name="keywords" content="" />
			<main className="createAccount">
				<div className="createAccount__container container">
					<section className="createAccount__header container__header">
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
								<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
								<circle cx="9" cy="7" r="4" />
								<path d="M19 8v6m3-3h-6" />
							</g>
						</svg>
						<div>
							<h1>Crear Nueva Cuenta</h1>
							<p>
								Complete los datos para abrir una cuenta
								bancaria
							</p>
						</div>
					</section>
					<form className="createAccount__body container__form">
						<div className="form_group">
							<label htmlFor="first_name">Nombre</label>
							<input
								type="text"
								placeholder="Ej: John"
								name="first_name"
								id="first_name"
							/>
						</div>
						<div className="form_group">
							<label htmlFor="last_name">Apellido</label>
							<input
								type="text"
								placeholder="Ej: Doe"
								name="last_name"
								id="last_name"
							/>
						</div>
						<div className="form_group">
							<label htmlFor="account_number">
								Número de Cuenta
							</label>
							<input
								type="text"
								placeholder="Ej: Doe"
								name="account_number"
								id="account_number"
							/>
						</div>

						<button type="submit">
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
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M19 8v6m3-3h-6" />
								</g>
							</svg>
							<span>Crear Cuenta</span>
						</button>
					</form>
				</div>
			</main>
		</>
	);
};

export default CreateAccount;
