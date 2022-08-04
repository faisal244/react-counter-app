export const Banner = ({ counter }) => {
	return (
		<div className="banner">
			<h1 className="banner-title">Count Down</h1>
			<div className="counter-value">{counter}</div>
		</div>
	);
};
