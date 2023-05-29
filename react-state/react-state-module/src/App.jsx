// what is state?
//  => component data that may change overtime

function App() {
    let name = "Ryu";

    const handleClick = () => {
        name = "Mario";
        console.log(name);
    }

	return (
		<>
			<h1>My name is {name}</h1>
            <button onClick={handleClick}>Change Name</button>
		</>
	);
}

export default App;
