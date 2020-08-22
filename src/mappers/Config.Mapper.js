export const mapConfig = (config) => ({
  url: config.images.secure_base_url,
  backdrop: {
    small: 'w300',
    normal: 'w780',
    big: 'w1280',
    original: 'original',
    custom: 'w1920_and_h800_multi_faces',
  },
  poster: {
    smaller: 'w154',
    small: 'w342',
    normal: 'w500',
    big: 'w780',
    original: 'original',
  },
  logo: {
    small: 'w45',
    normal: 'w92',
    big: 'w154',
    original: 'original',
  },
  profile: {
    small: 'w45',
    normal: 'w185',
    big: 'h632',
    original: 'original',
  },
  still: {
    small: 'w92',
    normal: 'w185',
    big: 'h300',
    original: 'original',
  },
});
