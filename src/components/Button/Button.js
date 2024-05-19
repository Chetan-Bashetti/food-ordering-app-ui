import React from 'react';

import './Button.css';

const Button = ({ title, click, disabled }) => {
	return (
		<button
			className={disabled ? 'button disabled' : 'button'}
			onClick={click}
			disabled={disabled}
		>
			{title}
		</button>
	);
};
export default Button;
