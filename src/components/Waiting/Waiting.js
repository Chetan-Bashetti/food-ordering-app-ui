import './Waiting.css';

const Waiting = () => {
	return (
		<div className='waiting-page-wrapper'>
			<div className='waiting-anim'>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<div className='cup'>
					<span></span>
				</div>
			</div>
			<div className='waiting-anim-text'>
				Relax! Your food is being prepared
			</div>
		</div>
	);
};

export default Waiting;
