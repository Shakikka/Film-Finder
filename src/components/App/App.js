import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../../apiCalls';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [genre, setGenre] = useState('')
  
  const getMovies =  () => {
    fetchMovies()
      .then(movies => {
        setMovies(movies.data)
      })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' render={() => {
          return (
            <div className='main-container'>
              <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} setGenre={setGenre}/>
              <Movies movies={movies} searchTerm={searchTerm} genre={genre}/>
            </div>
          )}}
        />
        <Route exact path='/:id' render={({ match }) => {
            const { id } = match.params
            return (
              <div className='movie-details-container'>
                <MovieDetails id={id}/>
              </div>
            )
          }}
        />
      </Switch>
    </div>
    )
}

export default App;
