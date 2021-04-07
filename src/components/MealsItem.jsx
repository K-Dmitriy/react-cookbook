import { Link } from "react-router-dom";

export default function MealsItem({ idMeal, strMealThumb, strMeal }) {
	return (
		<li className="card">
			<div className="card-image">
				<img src={strMealThumb} alt={strMeal} />
			</div>
			<div className="card-action">
				<Link to={`/meal/${idMeal}`} className="btn">
					Watch recipe
				</Link>
			</div>
		</li>
	);
}
