import React from 'react';
import { AppContext } from 'components';
import { categoriesData, subCategoriesData, foodItemsData } from 'mock/store';

import './FoodItems.css';

const FoodItems = () => {
	const {
		selectedCategory,
		selectedSubCategory,
		handleCategorySelection,
		handleSubCategorySelection
		// handleFoodItemSelection
	} = React.useContext(AppContext);

	return (
		<div className='food-items-wrapper'>
			<div className='main-categories-wrapper'>
				{categoriesData.map((eachCategory) => (
					<div
						className={
							selectedCategory === eachCategory.category_id
								? 'each-category'
								: 'each-category'
						}
						key={eachCategory.category_id}
						onClick={() => {
							handleCategorySelection(eachCategory.category_id);
						}}
					>
						{eachCategory.category_name}
					</div>
				))}
			</div>
			<div className='main-categories-wrapper'>
				{subCategoriesData
					?.filter(
						(eachSubCategory) => eachSubCategory.belongs_to === selectedCategory
					)
					.map((eachSubCategory) => (
						<div
							className={
								selectedSubCategory === eachSubCategory.sub_category_id
									? 'each-category'
									: 'each-category'
							}
							key={eachSubCategory.sub_category_id}
							onClick={() => {
								handleSubCategorySelection(eachSubCategory.sub_category_id);
							}}
						>
							{eachSubCategory.sub_category_name}
						</div>
					))}
			</div>
			<div className='food-items'>
				{foodItemsData
					?.filter(
						(eachFooItem) => eachFooItem.item_type === selectedSubCategory
					)
					.map((eachFooItem) => (
						<div className='each-item' key={eachFooItem.item_id}>
							<div className='each-item-title'>{eachFooItem.item_name}</div>
							<div>25 ₹</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default FoodItems;
