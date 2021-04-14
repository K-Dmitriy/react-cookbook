import { Link } from "react-router-dom";

export default function CategoryItem({ strCategory, strCategoryDescription, strCategoryThumb }) {
	return (
		<li className="card">
			<div className="card-image">
				<img src={strCategoryThumb} alt={strCategory} />
			</div>
			<div className="card-content">
				<h2 style={{ fontSize: "2rem" }}>{strCategory}</h2>
				<p>{strCategoryDescription.slice(0, 60)}...</p>
			</div>
			<div className="card-action">
				<Link to={`/category/${strCategory}`} className="btn">
					Watch category
				</Link>
			</div>
		</li>
	);
}
