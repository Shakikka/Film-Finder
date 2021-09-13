import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from '../../apiCalls';
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = () => {
    getMovies()
      .then(movies => {
        console.log(movies.data)
        setMovies(movies.data)
      })
  }

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'/>
      </Switch>
    </div>
    )
}

export default App;
