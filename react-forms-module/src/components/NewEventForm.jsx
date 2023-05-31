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

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title,
            date,
            id: Math.floor( Math.random() * 10000 )
        };
        console.log(event);
        resetForm();
    }

	return (
		<form className="new-event-form" onSubmit={handleSubmit}>
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
			<button>Submit</button>
		</form>
	);
}
