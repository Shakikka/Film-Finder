import { useEffect } from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movieDetails, setMovieId, id }) => {

    useEffect(() => {
        setMovieId(id)
    }, [setMovieId, id])

    console.log(movieDetails)
    return (
        <section>
            <p className='title'>{movieDetails ? movieDetails.title : 'Loading...'}</p>
        </section>
    )
}

export default MovieDetails;