import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { AppContext } from 'components';

import './Header.css';

const Header = () => {
	const { foodItemsList } = React.useContext(AppContext);

	const cartCount = foodItemsList?.filter((curr) => curr.isSelected).length;
	return (
		<div className='header-wrapper'>
			<div className='header-title'>Suburb.cafe</div>
			<div className='cart-icon'>
				<div className='notification'>{cartCount}</div>
				<ShoppingCartIcon />
			</div>
		</div>
	);
};

export default Header;
