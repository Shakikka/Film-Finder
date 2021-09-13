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


  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = () => {
    fetchMovies()
      .then(movies => {
        setMovies(movies.data)
      })
  }

  const getMovieDetails = id => {
    fetchMovieDetails(id)
      .then(movie => {
        setMovieDetails(movie.data)
        console.log(movie.data)
      })
  }

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <div className='main-container'>
              <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setGenre={setGenre}/>
              <Movies movies={movies} searchTerm={searchTerm} genre={genre} getMovieDetails={getMovieDetails}/>
            </div>
          )}}
        />
        <Route exact path='/:id' render={() => {
            return <MovieDetails movieDetails={movieDetails}/>
          }}
        />
      </Switch>
    </div>
    )
}

export default App;
