export const mapShowPage = (show, credits, recommendations, certifications, videos) => ({
  name: show.name,
  backdrop: show.backdrop,
  poster: show.poster,
  rating: certifications.results.filter((v) => v.iso_3166_1 === 'US')[0]?.rating,
  genres: show.genres,
  duration: show.duration,
  country: show.country,
  overview: show.overview,
  seasons: show.seasons,
  creator: show.creator,
  status: show.status,
  year: show.year,
  vote_average: show.vote_average,
  vote_count: show.vote_count,
  website: show.homepage,
  network: {
    name: show.network.name,
    logo: show.network.logo,
  },
  cast: credits.cast,
  recommendations: {
    results: recommendations.results,
    total_results: recommendations.total_results,
    total_pages: recommendations.total_pages,
  },
  video: videos[0]?.key,
});
