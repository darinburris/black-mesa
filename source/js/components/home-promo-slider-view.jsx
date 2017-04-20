import React from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	accessibility: true,
	arrows: true,
	slider: 'li',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

@connect(
	(store) => {
		return {
			categories: store.categories
		};
	}
)

export default class HomePromoSlider extends React.Component{

	render(){

		return (

			<section>
				<h1>Customer also bought</h1>

			<Slider {...settings}>
				<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/1" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/2" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/3" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/4" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/5" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/6" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/7" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>
			<div>
				<figure>
					<img src="http://lorempixel.com/1080/423/technics/8" alt="" />
					<figcaption>
						<p>Product title goes here</p>
						<data>$123.00</data>
					</figcaption>
				</figure>
			</div>

			</Slider>

			</section>

		);
	}

}
