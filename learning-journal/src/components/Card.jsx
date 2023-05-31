/* eslint-disable */
import "./Card.css";

export default function Card( { image, date, title, description } ) {
	return (
		<article className="card">
			<div className="card__image">
				<img src={image} alt={title} className="card__image-top" />
			</div>
			<div className="card__body">
				<h3 className="card__title">{date}</h3>
				<h4 className="card__subtitle">{title}</h4>
				<p className="card__description">
					{description}
				</p>
			</div>
		</article>
	);
}
