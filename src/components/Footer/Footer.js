import Button from 'components/Button/Button';
import { AppContext } from 'components';

import './Footer.css';
import React from 'react';

const Footer = () => {
	const { totalCharge, clearSelection, cartView, setCartView, setIsLoading } =
		React.useContext(AppContext);

	return (
		<div className='footer-wrapper'>
			{totalCharge > 0 ? (
				<div className='total-charges'>
					<div className='charges'>Total Charges -</div>
					<div className='price' style={{ margin: 0, fontSize: '1.8em' }}>
						₹ {totalCharge}
					</div>
				</div>
			) : (
				''
			)}
			<div className='footer-checkout'>
				<Button title={'Clear'} click={clearSelection} />
				{!cartView ? (
					<Button
						title={'Checkout'}
						disabled={totalCharge <= 0}
						click={() => {
							setCartView(!cartView);
							window.scrollTo(0, 0);
						}}
					/>
				) : (
					<Button
						title={'Checkout'}
						disabled={totalCharge <= 0}
						click={() => {
							setIsLoading(true);
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Footer;
