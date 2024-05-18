import React from 'react';
import Header from './Header/Header';
import FoodItems from './FoodItems/FoodItems';
import Footer from './Footer/Footer';

import { subCategoriesData, foodItemsData } from 'mock/store';

// STYLES
import './index.css';

export const AppContext = React.createContext();

const Wrapper = () => {
	const [table] = React.useState(0);

	const [selectedCategory, setSelectedCategory] = React.useState(
		subCategoriesData[0]['belongs_to']
	);
	const [selectedSubCategory, setSelectedSubCategory] = React.useState(
		foodItemsData[0]['item_type']
	);
	const [selectedFoodItem, setSelectedFoodItem] = React.useState([]);

	const handleCategorySelection = (category) => {
		let filteredSubCategory = subCategoriesData?.filter(
			(eachSubCategory) => eachSubCategory.belongs_to === category
		)[0]['sub_category_id'];
		setSelectedCategory(category);
		setSelectedSubCategory(filteredSubCategory);
	};

	const handleSubCategorySelection = (subCategory) => {
		console.log(subCategory, 'subCategory');
		setSelectedSubCategory(subCategory);
	};

	const handleFoodItemSelection = (foodItem) => {
		let updatedFoodItemSelections = [...selectedFoodItem];
		setSelectedFoodItem([...updatedFoodItemSelections, foodItem]);
	};

	return (
		<AppContext.Provider
			value={{
				table,
				selectedCategory,
				selectedSubCategory,
				selectedFoodItem,
				handleCategorySelection,
				handleSubCategorySelection,
				handleFoodItemSelection
			}}
		>
			<div className='main-wrapper'>
				<Header />
				<FoodItems />
				<Footer />
			</div>
		</AppContext.Provider>
	);
};

export default Wrapper;
