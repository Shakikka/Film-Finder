import { useEffect } from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movieDetails, setMovieId, id }) => {

    useEffect(() => {
        setMovieId(id)
    }, [setMovieId, id])

    console.log('movieDetails', movieDetails)
    return (
        <section>
            <p className='title'>{movieDetails.title}</p>
        </section>
    )
}

export default MovieDetails;