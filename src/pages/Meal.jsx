import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealByID } from "../api";

import Preloader from "../components/Preloader";
import Recipe from "../components/Recipe";

export default function Meal() {
	const { id } = useParams();
	const [meal, setMeal] = useState([]);
	const { goBack } = useHistory();

	useEffect(() => {
		getMealByID(id).then((data) => setMeal(data.meals));
	}, [id]);

	return (
		<>
			<button className="btn" onClick={goBack}>
				Back
			</button>
			{!meal.length ? <Preloader /> : <Recipe meal={meal[0]} />}
		</>
	);
}
