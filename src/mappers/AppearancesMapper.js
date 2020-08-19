export const mapAppearences = (data) => ({
  results: data.cast.map((show) => ({
    id: show.id,
    name: show.name,
    poster: show.poster_path,
    genres: show.genres,
    country: show.origin_country,
    overview: show.overview,
    year: show.first_air_date?.substring(0, 4),
  })),
});
