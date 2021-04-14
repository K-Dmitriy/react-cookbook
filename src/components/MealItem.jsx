import { Link } from "react-router-dom";

export default function MealItem({ idMeal, strMealThumb, strMeal }) {
	return (
		<li className="card">
			<div className="card-image">
				<img src={strMealThumb} alt={strMeal} />
			</div>
			<div className="card-content">
				<h2 style={{ fontSize: "1.5rem", margin: 0 }}>{strMeal}</h2>
			</div>
			<div className="card-action">
				<Link to={`/meal/${idMeal}`} className="btn">
					Watch recipe
				</Link>
			</div>
		</li>
	);
}
