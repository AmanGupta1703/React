// what is state?
//  => component data that may change overtime

import { useState } from "react";

function App() {
	const [name, setName] = useState("Ryu");

	const handleClick = () => {
		setName("Mario");
	};

	return (
		<>
			<h1>My name is {name}</h1>
			<button onClick={handleClick}>Change Name</button>
		</>
	);
}

export default App;
