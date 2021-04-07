import MealsItem from "./MealsItem";

export default function MealList({ meals = [] }) {
	return (
		<ul className="list">
			{meals.map((item) => {
				return <MealsItem key={item.idMeal} {...item} />;
			})}
		</ul>
	);
}
