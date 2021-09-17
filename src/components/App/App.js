import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies, fetchMovieDetails } from '../../apiCalls';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [genre, setGenre] = useState('')
  const [movieDetails, setMovieDetails] = useState([])
  const [movieId, setMovieId] = useState('')

  useEffect(() => {
    getMovies()
  }, [])

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(movie => {
        setMovieDetails(movie.data)
      })
  }, [movieId])

  const getMovies =  () => {
    fetchMovies()
      .then(movies => {
        setMovies(movies.data)
      })
  }

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <div className='main-container'>
              <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setGenre={setGenre}/>
              <Movies movies={movies} searchTerm={searchTerm} genre={genre} setMovieId={setMovieId}/>
            </div>
          )}}
        />
        <Route exact path='/:id' render={({ match }) => {
            const { id } = match.params
            return <MovieDetails movieDetails={movieDetails} setMovieId={setMovieId} id={id}/>
          }}
        />
      </Switch>
    </div>
    )
}

export default App;
