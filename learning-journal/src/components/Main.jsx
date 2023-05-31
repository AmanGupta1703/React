import Cards from "./Cards";
import Hero from "./Hero";
import "./Main.css";

export default function Main() {
	return (
		<main className="main">
			<Hero />
			<Cards />
			<button className="btn btn--view-more">View More</button>
		</main>
	);
}
