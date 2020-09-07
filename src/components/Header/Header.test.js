import React, { useState as useStateMock } from 'react';
import Enzyme, { shallow } from 'enzyme';
import Header, { SubMenu } from './Header';
import { Styled } from './styled';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<Header/>', () => {
  test('if Header component renders', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  describe('<Submenu/ >', () => {
    let container;
    const setState = jest.fn();

    beforeEach(() => {
      useStateMock.mockImplementation((init) => [init, setState]);
      container = Enzyme.shallow(<SubMenu />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('Hover', () => {
      test('if shows submenu on hover', () => {
        container.find(Styled.SubMenuWrapper).simulate('mouseEnter');
        expect(setState).toHaveBeenCalledWith(true);
      });
      test('if hides submenu on mouseleave', () => {
        container.find(Styled.SubMenuWrapper).simulate('mouseLeave');
        expect(setState).toHaveBeenCalled();
      });
    });
  });
});
