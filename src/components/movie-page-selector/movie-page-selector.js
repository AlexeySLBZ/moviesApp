import React from 'react';
import PropTypes from 'prop-types';
import './movie-page-selector.css';
import MoviePageSearch from '../movie-page-search';
import MoviePageRated from '../movie-page-rated';
import MoviesService from "../../services/movies-service";

export default function MoviePageSelector({ switchKeys, guestSessionId }) {

  const getHideClassByName = (name) => {
    const isVisible = switchKeys.some((el) => el === name);

    return isVisible ? '' : 'hidden';
  };

  return (
    <>
      <MoviePageSearch
        className={getHideClassByName('search')}
        getMovies={MoviesService.getMovies}
        rateMovie={(id, vote) => MoviesService.rateMovie(guestSessionId, id, vote)}
      />
      <MoviePageRated
        className={getHideClassByName('rated')}
        rateMovie={(id, vote) => MoviesService.rateMovie(guestSessionId, id, vote)}
        getRatedMovies={() => MoviesService.getRatedMovies(guestSessionId)}
      />
    </>
  );
}

MoviePageSelector.propTypes = {
  switchKeys: PropTypes.arrayOf(String).isRequired,
  guestSessionId: PropTypes.string.isRequired,
};
