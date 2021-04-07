import { Link } from "react-router-dom";

export default function MealItem({ idMeal, strMealThumb, strMeal }) {
	return (
		<li className="card">
			<div className="card-image">
				<img src={strMealThumb} alt={strMeal} />
			</div>
			<div className="card-action">
				<Link to={`/recipe/${idMeal}`} className="btn">
					Watch recipe
				</Link>
			</div>
		</li>
	);
}
