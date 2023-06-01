/* eslint-disable */
import { useState } from "react";

// styles
import "./TripList.css";

// custom hook
import { useFetch } from "../hooks/useFetch";

export default function TripList() {
	const [url, setUrl] = useState("http://localhost:3000/trips");
	const { data: trips, isPending } = useFetch(url);

	return (
		<div className="trip-list">
			<h2>Trip List</h2>
			{ isPending && <div>Loading trips...</div> }
			<ul>
				{trips && trips.map((trip) => {
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
				<button
					onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
				>
					European Trips
				</button>
				<button onClick={() => setUrl("http://localhost:3000/trips")}>
					All Trips
				</button>
			</div>
		</div>
	);
}
