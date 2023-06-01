import { useEffect, useState } from "react";
import "./TripList.css";

/* eslint-disable */
export default function TripList() {
	const [trips, setTrips] = useState([]);
	const [url, setUrl] = useState("http://localhost:3000/trips");

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setTrips(json));
	}, [url]); // fires this function whenever there is a change in url // runs for every intial / first render

	return (
		<div className="trip-list">
			<h2>Trip List</h2>
			<ul>
				{trips.map((trip) => {
					const { title, price, id } = trip;
					return (
						<li key={id}>
							<h3>{title}</h3>
							<p>{price}</p>
						</li>
					);
				})}
			</ul>
			<div className="filters">
				<button onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}>European Trips</button>
				<button onClick={() => setUrl("http://localhost:3000/trips")}>All Trips</button>
			</div>
		</div>
	);
}
