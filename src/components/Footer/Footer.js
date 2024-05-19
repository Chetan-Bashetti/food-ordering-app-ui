import Button from 'components/Button/Button';
import { AppContext } from 'components';

import './Footer.css';
import React from 'react';

const Footer = () => {
	const { totalCharge } = React.useContext(AppContext);
	return (
		<div className='footer-wrapper'>
			<div className='total-charges'>
				<div className='charges'>Total Charges -</div>
				<div className='price' style={{ margin: 0, fontSize: '1.8em' }}>
					₹ {totalCharge}
				</div>
			</div>
			<div className='footer-checkout'>
				<Button title={'Checkout'} />
				<Button title={'Clear'} />
			</div>
		</div>
	);
};

export default Footer;
