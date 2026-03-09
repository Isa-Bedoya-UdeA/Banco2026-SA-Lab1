import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../consts/routes";

const Header = () => {
	return (
		<header>
			<Link to={PATHS.HOME} className="header__brand">
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
						d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5-7h.01M2 8v1a2 2 0 0 0 2 2h1"
					/>
				</svg>
				<article>
					<h2>Banco UdeA</h2>
					<p>2026</p>
				</article>
			</Link>
			<nav>
				<ul>
					<NavLink
						to={PATHS.CREATE_ACCOUNT}
						end
						className={(active) => (active ? "active" : "")}
					>
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
					</NavLink>
					<NavLink
						to={PATHS.TRANSFER_FOUND}
						end
						className={(active) => (active ? "active" : "")}
					>
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
								d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
							/>
						</svg>
					</NavLink>
					<NavLink
						to={PATHS.TRANSACTION_HISTORY}
						end
						className={(active) => (active ? "active" : "")}
					>
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
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
