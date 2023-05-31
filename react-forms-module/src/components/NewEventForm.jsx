/* eslint-disable */
import { useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");

	const resetForm = () => {
		setTitle("");
		setDate("");
	};

	return (
		<form className="new-event-form">
			<label>
				<span>Event TItle: </span>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</label>
			<label>
				<span>Event Date: </span>
				<input
					type="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</label>
			<p>
				{title}. {date}
			</p>
            <p onClick={resetForm} style={ { cursor: "pointer" } }>reset the form.</p>
			<button>Submit</button>
		</form>
	);
}
