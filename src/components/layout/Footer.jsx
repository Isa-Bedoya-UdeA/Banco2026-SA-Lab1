import "./footer.css";
import { Link } from "react-router-dom";
import { PATHS } from "../../consts/routes";

const Footer = () => {
	return (
		<footer>
			<section className="footer__brand">
				<svg
					className="logo"
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
						d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1"
					/>
				</svg>
				<h2>Banco UdeA 2026</h2>
				<p>© 2026 Banco UdeA. Todos los derechos reservados.</p>
			</section>
			<section className="footer__navigation">
				<h3>Navegación</h3>
				<ul>
					<li>
						<Link to={PATHS.CREATE_ACCOUNT}>Crear Cuenta</Link>
					</li>
					<li>
						<Link to={PATHS.TRANSFER_FOUND}>Transferir Fondos</Link>
					</li>
					<li>
						<Link to={PATHS.TRANSACTION_HISTORY}>
							Historial de Transacciones
						</Link>
					</li>
				</ul>
			</section>
		</footer>
	);
};

export default Footer;
