import { Link } from 'react-router-dom';
import './Movies.css';

const Movies = ({ movies }) => {
    console.log(movies)
    return (
        movies.map(movie => {
            return (
                <Link to={`/${movie.id}`} key={movie.id} className='movie-card'>
                    <img src={`/assets/moviePosterImages/${movie.id}.jpeg`} alt={`${movie.title} poster`}/>
                    {movie.title}
                </Link>
            )
        })
    )
}

export default Movies;