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
	const [foodItemsList, setFoodItemsList] = React.useState(foodItemsData);
	const [selectedCategory, setSelectedCategory] = React.useState(
		subCategoriesData[0]['belongs_to']
	);
	const [selectedSubCategory, setSelectedSubCategory] = React.useState(
		foodItemsData[0]['item_type']
	);
	const [totalCharge, setTotalCharge] = React.useState();

	React.useEffect(() => {
		let itemsList = foodItemsData.map((eachItem) => {
			let updatedObj = { ...eachItem, isSelected: false, count: 0 };
			return updatedObj;
		});
		setFoodItemsList(itemsList);
	}, []);

	const handleCategorySelection = (category) => {
		let filteredSubCategory = subCategoriesData?.filter(
			(eachSubCategory) => eachSubCategory.belongs_to === category
		)[0]['sub_category_id'];
		setSelectedCategory(category);
		setSelectedSubCategory(filteredSubCategory);
	};

	const handleSubCategorySelection = (subCategory) => {
		setSelectedSubCategory(subCategory);
	};

	const handleFoodItemSelection = (foodItem, value) => {
		let updatedFoodItemSelections = [...foodItemsList];
		let itemId = updatedFoodItemSelections.findIndex(
			(eachItem) => eachItem.item_id === foodItem
		);
		updatedFoodItemSelections[itemId].isSelected = value > 0 ? true : false;
		updatedFoodItemSelections[itemId].count = value;
		setFoodItemsList(updatedFoodItemSelections);
	};

	React.useEffect(() => {
		let total = 0;

		total = foodItemsList
			?.filter((curr) => curr.isSelected)
			.reduce(
				(prev, curr) => Number(prev) + Number(curr.price * curr.count),
				0
			);
		setTotalCharge(total);
	}, [foodItemsList]);

	return (
		<AppContext.Provider
			value={{
				table,
				selectedCategory,
				selectedSubCategory,
				foodItemsList,
				totalCharge,
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
