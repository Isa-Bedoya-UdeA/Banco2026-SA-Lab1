import "./TransactionCard.css";

const TransactionCard = ({
	origin_account,
	receiver_account,
	amount,
	date,
}) => {
	return (
		<article className="transactionCard">
			<div className="transactionCard__data">
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
						d="M7 7h10v10M7 17L17 7"
					/>
				</svg>
				<div>
					<p>De: {origin_account}</p>
					<p>Para: {receiver_account}</p>
				</div>
			</div>
			<div>
				<h3>USD ${amount}</h3>
				<p>{date}</p>
			</div>
		</article>
	);
};

export default TransactionCard;
