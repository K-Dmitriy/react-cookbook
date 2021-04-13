export default function Recipe(props) {
	const { idMeal, strMeal, strInstructions, strMealThumb, strCategory, strArea, ...rest } = props.meal;

	return (
		<>
			<h2>{strMeal}</h2>
			<p>Category: {strCategory}</p>
			<p>Area: {strArea}</p>
			<img src={strMealThumb} alt={strMeal} />
			<table className="responsive-table highlight">
				<thead>
					<tr>
						<th>Ingredients</th>
						<th>Measure</th>
					</tr>
				</thead>

				<tbody>
					{Object.keys(rest).map((key) => {
						if (key.includes("Ingredient") && rest[key]) {
							return (
								<tr key={key}>
									<td>{rest[key]}</td>
									<td>{rest[`strMeasure${key.slice(13)}`]}</td>
								</tr>
							);
						}
						return null;
					})}
				</tbody>
			</table>
			<p>{strInstructions}</p>
			<p>{idMeal}</p>
		</>
	);
}
