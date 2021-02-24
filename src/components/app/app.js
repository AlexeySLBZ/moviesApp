import React from 'react';
import './app.css';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import MoviePage from '../movie-page';
import MoviesService from "../../services/movies-service";
import { GenreListProvider } from '../genre-list-context';
import ErrorAlert from '../error-alert';

export default class App extends React.Component {


  state = {
    loading: true,
    guestSessionId: '',
    error: false,
    errorMessage: '',
    genreList: null,
  };

  componentDidMount() {
    Promise.all([
      MoviesService.createGuestSession().then((id) => this.setState({ guestSessionId: id })),

      MoviesService.getGenreList().then(({ genres }) => {
        const genreList = genres.reduce((acc, { id, name }) => acc.set(id, name), new Map());

        this.setState({ genreList });
      }),
    ])
      .catch((error) =>
        this.setState({
          error: true,
          errorMessage: error.message,
        })
      )
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { loading, guestSessionId, error, errorMessage, genreList } = this.state;

    if (error) return <ErrorAlert message={errorMessage} />;

    if (loading) {
      return (
        <div className="loading-wrapper">
          <Spin tip="loading..." />
        </div>
      );
    }

    return  (
      <div className="main-wrapper">
        <GenreListProvider value={genreList}>
            <MoviePage guestSessionId={guestSessionId} />
        </GenreListProvider>
      </div>
    );
  }
}
