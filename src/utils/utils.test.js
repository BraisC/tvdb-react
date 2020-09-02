import utils from './utils';

describe('generateTitle', () => {
  test('if generates title', () => {
    expect(utils.generateTitle({ year: 1998, name: 'Test Show' })).toBe('Test Show (1998)');
    expect(utils.generateTitle({ name: 'Test Show' })).toBe('Test Show');
  });
});
