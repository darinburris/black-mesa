import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ProdList from '../source/js/components/product-list-view';

const wrapper = shallow(<ProdList />);

describe('CDP Product List Component Test',

	() => {

		it('Has a product',

			() => {

				expect(
					wrapper.length
				).toEqual(1);

			}

		);

		it('Has a product image',
			() => {
				expect(wrapper.find('img').length).toEqual(1);
			}
		);
		it('Has a product name',
			() => {
				expect(wrapper.find('p[itemProp="name"]').length).toEqual(1);
			}
		);
		it('Has a product link',
			() => {
				expect(wrapper.find('a').length).toEqual(1);
			}
		);
		it('Has a product price',
			() => {
				expect(wrapper.find('data[itemProp="price"]').length).toEqual(1);
			}
		);
		it('Has product colors',
			() => {
				expect(wrapper.find('.colors').length).toEqual(1);
			}
		);
		it('Has schema itemScope',
			() => {
				expect(wrapper.find('[itemScope]').length).toEqual(1);
			}
		);
		it('Has schema itemType',
			() => {
				expect(wrapper.find('[itemType]').length).toEqual(1);
			}
		);

	}

);
