import React from 'react';
import { AppContext } from 'components';
import { categoriesData, subCategoriesData } from 'mock/store';

import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import IcecreamIcon from '@mui/icons-material/Icecream';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

import './FoodItems.css';
import Item from 'components/Item/Item';

const FoodItems = () => {
	const {
		selectedCategory,
		selectedSubCategory,
		handleCategorySelection,
		handleSubCategorySelection,
		foodItemsList,
		handleFoodItemSelection
	} = React.useContext(AppContext);

	const foodIcons = {
		food_items: <RamenDiningIcon style={{ fontSize: '2em' }} />,
		beverages: <EmojiFoodBeverageIcon style={{ fontSize: '2em' }} />,
		chat: <FastfoodIcon style={{ fontSize: '2em' }} />,
		ice_cream: <IcecreamIcon style={{ fontSize: '2em' }} />
	};

	return (
		<div className='food-items-wrapper'>
			<div className='main-categories-wrapper'>
				{categoriesData.map((eachCategory, id) => (
					<div
						className='each-category'
						style={{ paddingLeft: id === 0 ? '0px' : '' }}
						key={eachCategory.category_id}
						onClick={() => {
							handleCategorySelection(eachCategory.category_id);
						}}
					>
						<div
							className={
								selectedCategory === eachCategory.category_id
									? 'icon-wrapper selected-category'
									: 'icon-wrapper'
							}
						>
							{foodIcons[eachCategory.category_id]}
						</div>
						<div className='category-title'>{eachCategory.category_name}</div>
					</div>
				))}
			</div>
			<div className='main-categories-wrapper'>
				{subCategoriesData
					?.filter(
						(eachSubCategory) => eachSubCategory.belongs_to === selectedCategory
					)
					.map((eachSubCategory, id) => (
						<div
							className='each-category'
							style={{ paddingLeft: id === 0 ? '0px' : '' }}
							key={eachSubCategory.sub_category_id}
							onClick={() => {
								handleSubCategorySelection(eachSubCategory.sub_category_id);
							}}
						>
							<div
								className={
									selectedSubCategory === eachSubCategory.sub_category_id
										? 'subcategory-title selected-sub-category'
										: 'subcategory-title'
								}
							>
								{eachSubCategory.sub_category_name}
							</div>
						</div>
					))}
			</div>
			<div className='food-items'>
				{foodItemsList
					?.filter(
						(eachFooItem) => eachFooItem.item_type === selectedSubCategory
					)
					.map((eachFooItem) => (
						<Item
							item={eachFooItem}
							key={eachFooItem.item_id}
							handleAddToCart={handleFoodItemSelection}
						/>
					))}
			</div>
		</div>
	);
};

export default FoodItems;
