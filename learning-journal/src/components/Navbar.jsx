import "./Navbar.css";
export default function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item">
					<a href="#" className="navbar__link">
						Home
					</a>
				</li>
				<li className="navbar__item">
					<a href="#" className="navbar__link">
						About us
					</a>
				</li>
			</ul>
		</nav>
	);
}
