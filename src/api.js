import { API_URL } from "./config";

async function getMealByID(id) {
	const res = await fetch(`${API_URL}lookup.php?i=${id}`);

	if (!res.ok) {
		throw new Error(`Could not fetch ${API_URL}lookup.php?i=${id}, received ${res.status}`);
	}

	return await res.json();
}

async function getAllCategories() {
	const res = await fetch(`${API_URL}categories.php`);

	if (!res.ok) {
		throw new Error(`Could not fetch ${API_URL}categories.php, received ${res.status}`);
	}

	return await res.json();
}

async function getFilteredCategory(category) {
	const res = await fetch(`${API_URL}filter.php?c=${category}`);

	if (!res.ok) {
		throw new Error(`Could not fetch ${API_URL}filter.php?c=${category}, received ${res.status}`);
	}

	return await res.json();
}

export { getMealByID, getAllCategories, getFilteredCategory };
