import { useState } from "react";

import { Banner } from "./components/Banner";
import { CountDown } from "./components/CountDown";
import { Boom } from "./components/Boom";

import "./App.css";

export const App = () => {
	const [counter, setCounter] = useState(10);
	const [message, setMessage] = useState();

	const onClick = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		} else {
			setMessage("BOOM");
		}
	};

	return (
		<div className="app-container">
			<Banner counter={counter} />
			<CountDown onClick={onClick} />
			{message && <Boom />}
		</div>
	);
};
