import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import TrafficLights from './TrafficLights';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<TrafficLights />
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

const rootElement = document.getElementById('root');
render(
	<section>
		<TrafficLights />
		<App />
	</section>,
	rootElement
);
