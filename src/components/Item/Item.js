import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import './Item.css';

const Item = ({ item, handleAddToCart }) => {
	let count = item.count;
	return (
		<div className={item.isSelected ? 'each-item selected' : 'each-item'}>
			<div className='each-item-wrapper'>
				<div className='item-icon-wrapper'>
					<RestaurantMenuIcon
						style={{ fontSize: '3em', color: 'var(--primary-color)' }}
					/>
				</div>
				<div className='title-price-wrapper'>
					<div className='each-item-title'>{item.item_name}</div>
					<div className='price'>₹ {item.price}</div>
				</div>
			</div>
			<div className='order-count'>
				<RemoveCircleIcon
					style={{
						color: item.count === 0 ? 'lightgray' : 'gray',
						cursor: item.count === 0 ? 'not-allowed' : 'pointer'
					}}
					onClick={
						count > 0
							? () => {
									handleAddToCart(item.item_id, count - 1);
							  }
							: () => {}
					}
				/>
				<div className='count'>{item.count}</div>
				<AddCircleIcon
					style={{ color: 'gray', cursor: 'pointer' }}
					onClick={() => {
						handleAddToCart(item.item_id, count + 1);
					}}
				/>
			</div>
		</div>
	);
};

export default Item;
