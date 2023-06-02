/* eslint-disable */
import "./SingleCard.css";
export default function SingleCard({ card: { id, src } }) {
	return (
		<div className="card">
			<img className="front" src={src} alt="card front" />
			<img className="back" src="/img/cover.png" alt="crad back" />
		</div>
	);
}
