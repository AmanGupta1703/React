/* eslint-disable */
import "./App.css";
import { useState } from "react";
import Title from "./components/title";

function App() {
	const [showEvents, setShowEvents] = useState(true);
	// eslint-disable-next-line no-unused-vars
	const [events, setEvents] = useState([
		{ title: "mario's birthday bash", id: 1 },
		{ title: "bowser's live stream", id: 2 },
		{ title: "race on moo moo farm", id: 3 },
	]);

	console.log(showEvents);

	const handleClick = (id) => {
		setEvents((prevEvents) =>
			prevEvents.filter((prevEvent) => prevEvent.id !== id)
		);
	};

	return (
		<div className="card">
			<Title />
			{showEvents && (
				<div>
					<button onClick={() => setShowEvents(false)}>hide events</button>
				</div>
			)}
			{ !showEvents &&
				<div>
					<button onClick={() => setShowEvents(true)}>show events</button>
				</div>
			}
			{showEvents &&
				events.map((event, index) => {
					return (
						<div key={event.id}>
							<h2>
								{index + 1}. {event.title}
							</h2>
							<button onClick={() => handleClick(event.id)}>
								Delete Event
							</button>
						</div>
					);
				})}
		</div>
	);
}

export default App;
