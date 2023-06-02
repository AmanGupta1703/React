/* eslint-disable */
import "./SingleCard.css";
export default function SingleCard({ card: { id, src }, handleChoice }) {

	const handleClick = (card) => {
		handleChoice({ id, src });
	}

	return (
		<div className="card">
			<img className="front" src={src} alt="card front" />
			<img
				className="back"
				onClick={handleClick}
				src="/img/cover.png"
				alt="crad back"
			/>
		</div>
	);
}
