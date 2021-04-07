import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="green darken-1">
			<div className="nav-wrapper">
				<h1 className="brand-logo">
					<Link to="/">React Meal</Link>
				</h1>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contacts">Contacts</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
