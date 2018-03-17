import React from 'react';

const Card = ({id, Number, Name, Categories, Img, Title, Excerpt, Description}) => {
	return(
		<div className = 'tc bg-light-green  dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="moniker " src={`${Img}`} />
			<div>
				<h2>{Name}</h2>
				<p>{Title}</p>
				<p>{Categories}</p>
			</div>
		</div>
	);
}

export default Card;
