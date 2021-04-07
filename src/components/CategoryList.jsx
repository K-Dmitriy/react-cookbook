import CategoryItem from "./CategoryItem";

export default function CategoryList({ catalog = [] }) {
	return (
		<ul className="list">
			{catalog.map((item) => {
				return <CategoryItem key={item.idCategory} {...item} />;
			})}
		</ul>
	);
}
