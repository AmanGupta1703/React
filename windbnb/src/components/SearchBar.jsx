/* eslint-disable */
import { useState } from "react";
import "./SearchBar.css";
export default function SearchBar({ setDisplaySearchBar }) {
	const [location, setLocation] = useState("");
	const [guest, setGuest] = useState("");

	const handleLocationChange = (e) => {
		setLocation(e.target.value);
	};

	const handleGuestCountChange = (e) => {
		setGuest(e.target.value);
	};

	return (
		<section className="search search--bar">
			<article className="search__header">
				<h3 className="search__title">Edit your search</h3>
				<button
					className="btn btn--close"
					onClick={() => setDisplaySearchBar(false)}
				>
					<i className="fa-sharp fa-solid fa-xmark"></i>
				</button>
			</article>

			<article className="search__form">
				<div className="search__form-group">
					<label>
						location
						<input
							type="text"
							className="search__form__location"
							placeholder="Helsinki, Finland"
							value={location}
							onChange={handleLocationChange}
						/>
					</label>
				</div>
				<hr />
				<div className="search__form-group">
					<label>
						Guests
						<input
							type="number"
							className="search__form__guest-count"
							placeholder="Add guests"
							value={guest}
							onChange={handleGuestCountChange}
						/>
					</label>
				</div>
			</article>

			<button className="btn btn--search">
				<i className="fa-sharp fa-solid fa-magnifying-glass"></i> Search
			</button>

			<article className="search__all-locations">
				<ul className="search__location-list">
					<li className="location">
						<i className="fa-sharp fa-solid fa-location-dot"></i>
						<span className="location__name">Helsinki, Finland</span>
					</li>
					<li className="location">
						<i className="fa-sharp fa-solid fa-location-dot"></i>
						<span className="location__name">Turku, Finland</span>
					</li>
					<li className="location">
						<i className="fa-sharp fa-solid fa-location-dot"></i>
						<span className="location__name">Oulu, Finland</span>
					</li>
					<li className="location">
						<i className="fa-sharp fa-solid fa-location-dot"></i>
						<span className="location__name">Vaasa, Finland</span>
					</li>
				</ul>
			</article>

			<article className="search__guest-count">
				<div className="guest guest--box">
					<h3 className="guest__header">
						Adults <span>Ages 13 or above</span>
					</h3>
					<div className="search__button-container">
						<button className="btn btn--minus">
							<i className="fa-sharp fa-solid fa-minus"></i>
						</button>
						<span>1</span>
						<button className="btn btn--add">
							<i className="fa-sharp fa-solid fa-plus"></i>
						</button>
					</div>
				</div>

				<div className="guest guest--box">
					<h3 className="guest__header">
						Children<span>Ages 2-12</span>
					</h3>
					<div className="search__button-container">
						<button className="btn btn--minus">
							<i className="fa-sharp fa-solid fa-minus"></i>
						</button>
						<span>0</span>
						<button className="btn btn--add">
							<i className="fa-sharp fa-solid fa-plus"></i>
						</button>
					</div>
				</div>
			</article>
		</section>
	);
}
