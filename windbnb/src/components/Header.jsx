/* eslint-disable */
import { useState } from "react";
import HeaderLogo from "../assets/logo.png";
import "./Header.css";
import SearchBar from "./SearchBar";
export default function Header() {
	const [displaySearchBar, setDisplaySearchBar] = useState(false);

	return (
		<header className="Header">
			<div className="Header__image-container">
				<img src={HeaderLogo} alt="windbnb logo" className="Header__logo" />
			</div>
			<section className="form form--search">
				<div className="form__group" onClick={() => setDisplaySearchBar(true)}>
					<input
						type="text"
						className="form__text-input"
						placeholder="Helsinki, Finland"
					/>
					<div className="vertical-line"></div>
					<input
						type="number"
						className="form__number-input"
						placeholder="Add guests"
					/>
					<div className="vertical-line"></div>
					<button type="submit" className="btn btn--search">
						<i className="fa-sharp fa-solid fa-magnifying-glass"></i>
					</button>
				</div>
			</section>
			{displaySearchBar && <SearchBar setDisplaySearchBar={setDisplaySearchBar} />}
		</header>
	);
}
