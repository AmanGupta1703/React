/* eslint-disable */

// what is state?
//  => component data that may change overtime

import { useState } from "react";

function App() {
	// eslint-disable-next-line no-unused-vars
	const [events, setEvents] = useState([
		{ title: "mario's birthday bash", id: 1 },
		{ title: "bowser's live stream", id: 2 },
		{ title: "race on moo moo farm", id: 3 },
	]);

	const handleClick = (id) => {
		setEvents((prevEvents) =>
			prevEvents.filter((prevEvent) => prevEvent.id !== id)
		);
	};

	return (
		<>
			{events.map((event, index) => {
				return (
					<div key={event.id}>
						<h2>
							{index + 1}. {event.title}
						</h2>
						<button onClick={() => handleClick(event.id)}>Delete Event</button>
					</div>
				);
			})}
		</>
	);
}

export default App;
