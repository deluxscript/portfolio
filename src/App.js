import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Navs from './components/Navs/Navs';
import Contact from './components/Contact/Contact';
import Allprojects from './components/Allprojects/Allprojects';

class App extends Component {

	constructor() {
		super();
		this.state = {
			route: 'Home'
		}
	}

	onRouteChange = (route) => {
		this.setState({route: route});
		console.log('Changing');
	}

	render() {
		const { route } = this.state;
		{
			if (route === 'Home') {
				return (
					<div>
						<Home onRouteChange= {this.onRouteChange} />
					</div>
				);
			}
			else if(route === 'Projects') {
				return (
					<div>
						<Navs onRouteChange= {this.onRouteChange} />
						<Projects />
					</div>
				);
			}
			else if(route === 'Contact') {
				return (
					<div>
						<Navs onRouteChange= {this.onRouteChange} />
						<Contact />
					</div>
				);
			}
			else if (route === 'Allprojects') {
				return (
					<div>
						<Navs onRouteChange= {this.onRouteChange} />
						<Allprojects />
					</div>
				);
			}
			else {
				return (
					<div>
						<Home onRouteChange= {this.onRouteChange} />
					</div>
				);
			}
		}
	}
}

export default App;
