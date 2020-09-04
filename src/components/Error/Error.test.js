import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';
import { Styled } from './styled';

describe('<Error/>', () => {
  test('if Error component renders', () => {
    expect(shallow(<Error />)).toHaveLength(1);
  });

  it('if renders ImageWrapper', () => {
    expect(shallow(<Error />).find(Styled.ImageWrapper)).toHaveLength(1);
  });

  it('if renders PageTitle', () => {
    expect(shallow(<Error />).find(Styled.PageTitle)).toHaveLength(1);
  });
});
