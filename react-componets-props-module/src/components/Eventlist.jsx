/* eslint-disable */
import React from "react";
export default function Eventlist({ events, handleClick }) {
	return events.map((event, index) => {
		return (
			<React.Fragment key={event.id}>
				<h2>
					{index + 1}.) {event.title}
				</h2>
				<button onClick={() => handleClick(event.id)}>Delete Event</button>
			</React.Fragment>
		);
	});
}
