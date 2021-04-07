import MealItem from "./MealItem";

export default function MealList({ meals = [] }) {
	return (
		<ul className="list">
			{meals.map((item) => {
				return <MealItem key={item.idMeal} {...item} />;
			})}
		</ul>
	);
}
