/* eslint-disable */

// what is state?
//  => component data that may change overtime

import { useState } from "react";

function App() {
	const [name, setName] = useState("Ryu");
	// eslint-disable-next-line no-unused-vars
	const [events, setEvents] = useState([
		{ title: "mario's birthday bash", id: 1 },
		{ title: "bowser's live stream", id: 2 },
		{ title: "race on moo moo farm", id: 3 },
	]);

	const handleClick = () => {
		setName("Mario");
	};

	return (
		<>
			<h1>My name is {name}</h1>
			<button onClick={handleClick}>Change Name</button>
			{events.map((event, index) => {
				return (
					<div key={event.id}>
						<h2>{index + 1}. {event.title}</h2>
					</div>
				);
			})}
		</>
	);
}

export default App;
