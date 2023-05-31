import Logo from "../assets/logo-icon.png";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo-title">
                <img src={Logo} alt="learning-jounral-logo" className="header__logo" />
                <h1 className="primary-header">My learning journal</h1>
            </div>
            <Navbar />
		</header>
	);
}
