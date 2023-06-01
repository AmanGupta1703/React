import { useState } from "react";

/* eslint-disable */
export default function TripList() {
	const [trips, setTrips] = useState([]);

	fetch("http://localhost:3000/trips")
		.then((response) => response.json())
		.then((json) => setTrips(json)); // will keep on fetching since the component is re-evaluated as the state is changed in each re-evaluation / render

    // console.log(trips); 

	return (
		<div>
			<h2>Trip List</h2>
		</div>
	);
}
