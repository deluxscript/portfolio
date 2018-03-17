import React from 'react';
import SnowStorm from 'react-snowstorm';
import './Home.css';

const Home = ({onRouteChange}) => {
	return (
		<div className="Home-bg">
			<div id="moon"></div>
			<div className="flex-center Home">
				<div className="tc enclosed w-70">
					<h2 className="white f1 ttc tagline">I make heavenly Projects come alive.</h2>
					<p className="white f4">Oladele O.</p>
					<button className="ph5 pv3 enter b hvr-shutter-in-horizontal" onClick = {() => onRouteChange('Projects')} >Continue</button>
				</div>
			</div>
			<SnowStorm />
		</div>
	)
}

export default Home;
