export const mapShowList = (data) => ({
  pages: data.total_pages,
  page: data.page,
  total_results: data.total_results,
  total_pages: data.total_pages,
  results: data.results.map((show) => ({
    id: show.id,
    name: show.name,
    backdrop: show.backdrop_path,
    poster: show.poster_path,
    genres: show.genres,
    country: show.origin_country,
    overview: show.overview,
    year: show.first_air_date?.substring(0, 4),
  })),
});
