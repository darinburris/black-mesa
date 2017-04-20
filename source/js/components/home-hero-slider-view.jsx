import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	accessibility: true,
	arrows: true
};

@connect(
	(store) => {
		return {
			categories: store.categories
		};
	}
)

export default class HomeHeroSlider extends React.Component{

	render(){

		return (

			<Slider {...settings}>
				<div><img src="http://lorempixel.com/1080/423/city/9" alt="" /></div>
				<div><img src="http://lorempixel.com/1080/423/city/8" alt="" /></div>
				<div><img src="http://lorempixel.com/1080/423/city/7" alt="" /></div>
				<div><img src="http://lorempixel.com/1080/423/city/6" alt="" /></div>
			</Slider>

		);
	}

}
