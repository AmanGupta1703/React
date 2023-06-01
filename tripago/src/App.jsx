/* eslint-disable */

import { useState } from "react";
import "./App.css";
import TripList from "./components/TripList";
function App() {
	const [showTrips, setShowTrips] = useState(true);
	return (
		<>
			<button
				style={{ background: "transparent", color: "white" }}
				onClick={() => setShowTrips(false)}
			></button>
			{showTrips && <TripList />}
		</>
	);
}

export default App;
