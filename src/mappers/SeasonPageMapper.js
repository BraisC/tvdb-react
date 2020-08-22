export const mapSeasonPage = (season, show) => ({
  show: {
    id: show.id,
    name: show.name,
    backdrop: show.backdrop,
    poster: show.poster,
    seasons: show.seasons,
  },
  id: season.id,
  name: season.name,
  backdrop: season.backdrop,
  poster: season.poster_path,
  episodes: season.episodes,
  overview: season.overview,
  number: season.season_number,
});
