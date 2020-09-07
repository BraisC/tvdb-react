import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header/>', () => {
  test('if Header component renders', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
