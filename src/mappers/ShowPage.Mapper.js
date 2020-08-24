export const mapShowPage = (show, certifications, videos) => {
  if (!show || !certifications || !videos) throw new Error('Error getting show info');
  const res = {
    id: show.id,
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
    website: show.website,
    network: {
      name: show.network.name,
      logo: show.network.logo,
    },
    video: videos.results[0]?.key,
  };

  return res;
};
