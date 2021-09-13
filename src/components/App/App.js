import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from '../../apiCalls';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [genre, setGenre] = useState('')


  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = () => {
    getMovies()
      .then(movies => {
        setMovies(movies.data)
        console.log(movies.data)
      })
  }

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
            const clickedMovie= movies.find(movie => movie.id === Number(id))
            return <MovieDetails movieDetails={clickedMovie}/>
          }}
        />
      </Switch>
    </div>
    )
}

export default App;
