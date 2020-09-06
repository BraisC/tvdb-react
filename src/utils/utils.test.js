import utils from './utils';

describe('generateTitle', () => {
  test('if generates title', () => {
    expect(utils.generateTitle({ year: 1998, name: 'Test Show' })).toBe('Test Show (1998)');
    expect(utils.generateTitle({ name: 'Test Show' })).toBe('Test Show');
  });
});

describe('getCountryName', () => {
  test('if gets country name', () => {
    expect(utils.getCountryName('US')).toBe('United States');
    expect(utils.getCountryName('ES')).toBe('Spain');
    expect(utils.getCountryName('KK')).toBe('KK');
  });
});

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec faucibus sapien. Nullam molestie luctus quam sed aliquam. Mauris eget sodales tortor. In aliquam ut nulla quis luctus. Nulla in porta ligula, at posuere urna. Aliquam sed fringilla lectus. Fusce consectetur interdum rutrum. Donec nec vestibulum justo. Suspendisse risus ligula, vestibulum quis feugiat ut, hendrerit quis ipsum. Proin turpis arcu, rhoncus sit amet lacus eu, accumsan accumsan odio. Morbi ultrices vehicula ex, vitae semper massa rhoncus vitae. Duis ac porttitor sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum consequat nulla quis purus laoreet, vulputate auctor nulla fermentum. Nulla facilisi. Sed magna lacus, pharetra eget felis non, volutpat interdum tellus. Vivamus tincidunt aliquet efficitur. Ut non lorem fermentum, commodo risus vel, semper turpis. Etiam eget arcu ut ante bibendum vestibulum in bibendum ligula. Praesent commodo orci enim, a imperdiet sapien blandit in. Etiam vitae.';

const shortString = 'Hello my dear';

describe('limitTextLength', () => {
  test('if limits length', () => {
    expect(utils.limitTextLength(longString, 20).length).toBeLessThanOrEqual(23);
    expect(utils.limitTextLength(longString, 30).length).toBeLessThanOrEqual(33);
    expect(utils.limitTextLength(shortString)).toHaveLength(shortString.length);
  });
});
