import './Button.css';

const Button = ({ title, click }) => {
	return (
		<button className='button' onClick={click}>
			{title}
		</button>
	);
};
export default Button;
