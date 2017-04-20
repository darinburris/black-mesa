// import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import store
import store from '../store';

// import views
import HomeHeroSlider from 'home-hero-slider-view';
import HomePromoSlider from 'home-promo-slider-view';
// import HomePromoResponsiveSlider from 'responsive-slider-view';

ReactDOM.render(
	<Provider store={store}><HomeHeroSlider config='hero'/></Provider>,
	document.getElementById('hero')
);

ReactDOM.render(
	<Provider store={store}><HomePromoSlider config='promo'/></Provider>,
	document.getElementById('promo')
);

//
// ReactDOM.render(
// 	<Provider store={store}><HomePromoResponsiveSlider config='responsive'/></Provider>,
// 	document.getElementById('responsive')
// );
