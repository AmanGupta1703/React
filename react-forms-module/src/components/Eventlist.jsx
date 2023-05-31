/* eslint-disable */
import styles from "./Eventlist.module.css";
export default function Eventlist({ events, handleClick }) {
	return events.map((event, index) => {
		return (
			<div className={styles.card} key={event.id}>
				<h2>
					{index + 1}.) {event.title}
				</h2>
				<p>{event.location} - {event.date}</p>
				<button onClick={() => handleClick(event.id)}>Delete Event</button>
			</div>
		);
	});
}
