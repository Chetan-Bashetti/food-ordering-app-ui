import React from 'react';
import { AppContext } from 'components';
import Item from 'components/Item/Item';

import './Cart.css';

const Cart = () => {
	const { foodItemsList, handleFoodItemSelection } =
		React.useContext(AppContext);

	return (
		<div className='cart-wrapper'>
			{foodItemsList
				?.filter((curr) => curr.isSelected)
				.map((eachFooItem) => (
					<Item
						item={eachFooItem}
						key={eachFooItem.item_id}
						handleAddToCart={handleFoodItemSelection}
					/>
				))}
		</div>
	);
};

export default Cart;
