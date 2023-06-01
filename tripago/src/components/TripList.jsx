import { useEffect, useState } from "react";
import "./TripList.css";

/* eslint-disable */
export default function TripList() {
	const [trips, setTrips] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/trips")
			.then((response) => response.json())
			.then((json) => setTrips(json));
	}, []);

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
		</div>
	);
}
