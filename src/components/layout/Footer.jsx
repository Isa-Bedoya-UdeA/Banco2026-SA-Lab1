import "./footer.css";
import { Link } from "react-router-dom";
import { PATHS } from "../../consts/routes";

const Footer = () => {
	return (
		<footer>
			<section className="footer__brand">
				<h2>Banco UdeA 2026</h2>
				<p>© 2026 Banco UdeA. Todos los derechos reservados.</p>
			</section>
			<section className="footer__navigation">
				<h3>Navegación</h3>
				<ul>
					<Link to={PATHS.CREATE_ACCOUNT}>Crear Cuenta</Link>
					<Link to={PATHS.TRANSFER_FOUND}>Transferir Fondos</Link>
					<Link to={PATHS.TRANSACTION_HISTORY}>
						Historial de Transacciones
					</Link>
				</ul>
			</section>
		</footer>
	);
};

export default Footer;
