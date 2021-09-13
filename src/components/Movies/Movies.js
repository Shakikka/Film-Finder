import { Link } from 'react-router-dom';
import './Movies.css';

const Movies = ({ movies }) => {
    console.log(movies)
    return (
        movies.map(movie => {
            return (
                <Link to={`/${movie.id}`} key={movie.id} className='movie-card'>
                    <img src='' alt=''/>
                    {movie.title}
                </Link>
            )
        })
    )
}

export default Movies;