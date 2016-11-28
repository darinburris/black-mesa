import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, render } from 'enzyme';
import MegaNav from '../source/js/components/mega-nav-list-view';

const wrapper = shallow(<MegaNav categories="test" />);

describe('Mega nav test',

	() => {


		it('Has a category items',

			() => {

				expect(
					wrapper.length
				).toEqual(1);

			}

		);

		it('Has a category link',
			() => {
				expect(
					wrapper.find('a').length
				).toEqual(1);
			}
		);
		it('Link has a text value',
			() => {
				expect(
					wrapper.find('a').text()
				).toNotBe('');
			}
		);

	}

);
