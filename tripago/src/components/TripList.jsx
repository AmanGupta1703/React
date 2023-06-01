import { useCallback, useEffect, useState } from "react";
import "./TripList.css";

/* eslint-disable */
export default function TripList() {
	const [trips, setTrips] = useState([]);
	const [url, setUrl] = useState("http://localhost:3000/trips");

	const fetchTrips = useCallback(async () => { 		// creates a cache version of the function 
		const response = await fetch(url);				// and not every re-render the cache function is not being recreated in the memory
		const json = await response.json();
		setTrips(json);
	}, [url]); // also has a dependency array, which will tell the `useCallback` when to create a new version
	// will generate a new version of callback, when the `url` changes (`url` changes when the button is clicked)

	useEffect(() => {
		fetchTrips();
	}, [fetchTrips]);

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
