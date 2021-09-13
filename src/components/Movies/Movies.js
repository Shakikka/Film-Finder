import { Link } from 'react-router-dom';
import './Movies.css';

const Movies = ({ genre, movies, searchTerm, getMovieDetails }) => {
    
    const shownMovies = movies.filter(movie => {
        if (!searchTerm && !genre) {
            return movie
        } else if (movie.genres.join(' ').toLowerCase().includes(genre) && movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return movie
        } else {
            return false
        }
    }).map(movie => {
        return (
            <Link to={`/${movie.id}`} key={movie.id} className='movie-card' onClick={() => getMovieDetails(movie.id)}>
                <img src={`/assets/moviePosterImages/${movie.id}.jpeg`} alt={`${movie.title} poster`} />
                {movie.title}
            </Link>
        )
    })
    
    return (
        <section className='movie-cards-box'>
           {shownMovies && shownMovies}
           {!shownMovies.length && <p className='sorry'>We're sorry, but there are no matches for your search.</p>}
        </section>
    )
}

export default Movies;