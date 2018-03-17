import React from 'react';
import './Navs.css';

const Navs = ({onRouteChange}) => {
	return (
		<div className = "Navs flex-center pa3">
			<a className="hvr-underline-from-left pv2 ttu ph2 pointer links" onClick = {() => onRouteChange('Home')} >Home</a>
			<a className="hvr-underline-from-left pv2 ttu ph2 pointer links" onClick = {() => onRouteChange('Allprojects')} >All Projects</a>
			<a className="hvr-underline-from-left pv2 ttu ph2 pointer links" onClick = {() => onRouteChange('Contact')}>UXelerate</a>
			<a className="hvr-underline-from-left pv2 ttu ph2 pointer links" onClick = {() => onRouteChange('Contact')}>Silly Valley</a>
			<a className="hvr-underline-from-left pv2 ttu ph2 pointer links" onClick = {() => onRouteChange('Contact')}>Design Process</a>
			<a className="hvr-underline-from-left pv2 ttu ph2 pointer links" onClick = {() => onRouteChange('Contact')}>Writings</a>
			<a className="hvr-underline-from-left pv2 ttu ph2 pointer links" onClick = {() => onRouteChange('Contact')}>Contact</a>
		</div>
	)
}

export default Navs;
