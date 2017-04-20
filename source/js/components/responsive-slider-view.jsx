import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';

@connect(
	(store) => {
		return {
			categories: store.categories
		};
	}
)

export default class HomePromoResponsiveSlider extends React.Component{

	render(){

		return (

			<Carousel axis="horizontal" showThumbs={false} showArrows={true} dynamicHeight emulateTouch>
				<figure>
					<img src="http://loremflickr.com/g/1080/432/texas/all?random=1" alt="" />
					<figcaption>THis is a test</figcaption>
				</figure>
				<figure>
					<img src="http://loremflickr.com/g/1080/432/texas/all?random=2" alt="" />
					<figcaption>THis is a test</figcaption>
				</figure>
				<figure>
					<img src="http://loremflickr.com/g/1080/432/texas/all?random=3" alt="" />
					<figcaption>THis is a test</figcaption>
				</figure>

			</Carousel>

		);
	}

}
