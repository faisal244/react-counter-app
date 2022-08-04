export const CountDown = ({ onClick }) => {
	return (
		<div className="countdown">
			<div className="description">
				Click on the button to count down and watch the action unfold!!
			</div>
			<hr />
			<div>
				<button className="btn" onClick={onClick}>
					Count Down
				</button>
			</div>
		</div>
	);
};
