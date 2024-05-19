import './Status.css';

const Status = () => {
	return (
		<div className='status-wrapper'>
			<div>
				<div>
					Total Items - <span className='order-summary-text'>10</span>
				</div>
				<div>
					Total charges - <span className='order-summary-text'>₹ 200</span>
				</div>
			</div>
			<div className='status-text cancalled'>Cancalled</div>
		</div>
	);
};

export default Status;
