import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow, render } from 'enzyme';
import FacetsList from '../source/js/components/facets-list-view';

const wrapper = shallow(<FacetsList categories="test" />);

describe('Facets nav test',

	() => {


		it('Has facet items',

			() => {

				expect(
					wrapper.length
				).toEqual(1);

			}

		);

		it('Has a facet link',
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
