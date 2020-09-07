import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer/>', () => {
  test('if Footer component renders', () => {
    expect(shallow(<Footer />)).toMatchSnapshot();
  });
});
