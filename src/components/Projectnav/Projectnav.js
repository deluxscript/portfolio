import React from 'react';
import Card from './Card';

const Projectnav = ({ Portfolios }) => {
	
	return(
		<div>
			{
				Portfolios.map((Portfolio, i) => {
					return <Card	id={Portfolios[i].id}
						key={Portfolios[i].id}
						Number={Portfolios[i].Number}
						Name = {Portfolios[i].Name}
						Categories = {Portfolios[i].Categories} 
						Img = {Portfolios[i].Img[0]}
						Title = {Portfolios[i].Title}
						Excerpt = {Portfolios[i].Excerpt}
						Description = {Portfolios[i].Description}
					/>
				})
			}
		</div>
	);
}

export default Projectnav;
