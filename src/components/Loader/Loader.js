import './Loader.css';

const Loader = () => {
	return (
		<div className='loader'>
			<ul>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='cup'>
				<span></span>
			</div>
			<div className='loader-text'>Relax! Your food is being prepared</div>
		</div>
	);
};

export default Loader;
