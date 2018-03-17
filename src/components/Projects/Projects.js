import React from 'react';
import './Projects.css';
import { Portfolios } from './Portfolios';
import Projectnav from '../Projectnav/Projectnav';

class  Projects extends React.Component {

	// constructor() {
	// 	super();
	// 	this.state = {
	// 		projectRoute: ''
	// 	}
	// }
	// componentDidMount() {
	// 	console.log(Portfolios);
	// }


	render(){
		return (
			<div className="Projects">
				<div className="bb"></div>
				<Projectnav Portfolios = {Portfolios}/>
			</div>
		)
	}
}

export default Projects;
