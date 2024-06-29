/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import Header from './Header/Header';
import FoodItems from './FoodItems/FoodItems';
import Footer from './Footer/Footer';
import Status from './Status/Status';
import Cart from './Cart/Cart';
import Waiting from './Waiting/Waiting';

import { subCategoriesData, foodItemsData } from 'mock/store';

// STYLES
import './index.css';
import Loader from './Loader/Loader';

export const AppContext = React.createContext();

const Wrapper = () => {
	const [table, setTable] = React.useState(0);
	const [foodItemsList, setFoodItemsList] = React.useState([]);
	const [selectedCategory, setSelectedCategory] = React.useState(
		subCategoriesData[0]['belongs_to']
	);
	const [selectedSubCategory, setSelectedSubCategory] = React.useState(
		foodItemsData[0]['item_type']
	);
	const [totalCharge, setTotalCharge] = React.useState();
	const [cartView, setCartView] = React.useState(false);
	const [isOccupied, setisOccupied] = React.useState(false);
	const [orderStatus, setOrderStatus] = React.useState('');
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		let currentTable = window.location.href.split('/')?.at(-1);
		setTable(currentTable);
		checkTableAvailability(currentTable);
	}, []);

	const setdefaultValues = (data) => {
		console.log(data);
		let itemsList = data.map((eachItem) => {
			let updatedObj = {
				...eachItem,
				isSelected: eachItem.isSelected || false,
				count: eachItem.count || 0
			};
			return updatedObj;
		});
		setFoodItemsList(itemsList);
		setIsLoading(false);
	};

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

	const clearSelection = () => {
		setdefaultValues(foodItemsData);
	};

	const createOrder = async () => {
		let res = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_API_URL}orders/add-new-order`,
			data: {
				order_status: 'pending',
				table_number: table,
				items_orderd: foodItemsList?.filter((curr) => curr.isSelected),
				total_price: totalCharge.toString()
			}
		});
		setOrderStatus('pending');
		setisOccupied(true);
		console.log(res);
	};

	const checkTableAvailability = async (currentTable) => {
		try {
			setIsLoading(true);
			let res = await axios({
				method: 'get',
				url: `${process.env.REACT_APP_API_URL}tables/available/${currentTable}`
			});
			if (res.data.data.order_status !== 'completed') {
				setdefaultValues(res.data.data.items_orderd);
				setOrderStatus(res.data.data.order_status);
				setIsLoading(false);
				setisOccupied(true);
			} else {
				setdefaultValues(foodItemsData);
			}
		} catch (err) {
			setdefaultValues(foodItemsData);
			setCartView(false);
			setisOccupied(false);
			console.log(err);
		}
	};

	return (
		<AppContext.Provider
			value={{
				table,
				selectedCategory,
				selectedSubCategory,
				foodItemsList,
				totalCharge,
				cartView,
				orderStatus,
				isOccupied,
				handleCategorySelection,
				handleSubCategorySelection,
				handleFoodItemSelection,
				clearSelection,
				setCartView,
				setisOccupied,
				createOrder,
				checkTableAvailability
			}}
		>
			{!isLoading ? (
				<>
					{!isOccupied ? (
						<div className='main-wrapper'>
							<Header />
							{!cartView ? <FoodItems /> : <Cart />}
							<Footer />
						</div>
					) : (
						<div className='main-wrapper'>
							<Header />
							<Waiting />
							<Status />
						</div>
					)}
				</>
			) : (
				<div className='loader-wrapper'>
					<Loader />
				</div>
			)}
		</AppContext.Provider>
	);
};

export default Wrapper;
