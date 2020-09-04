import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button/>', () => {
  test('if Button component renders', () => {
    expect(shallow(<Button />)).toHaveLength(1);
  });

  it('if renders children when passed in', () => {
    const wrapper = shallow(
      <Button>
        <div className="unique" />
      </Button>
    );
    expect(wrapper.contains(<div className="unique" />)).toBe(true);
  });
});
