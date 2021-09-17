import { useEffect } from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movieDetails, setMovieId, id }) => {

    useEffect(() => {
        setMovieId(id)
    }, [setMovieId, id])

    console.log('movieDetails', movieDetails)
    return (
        <section className='movie-details' style={{backgroundImage: `url(/assets/movieHeroImages/${movieDetails.id}.jpeg)`}}>
            <h2 className='title'>{movieDetails.title}</h2>
            <h3>{movieDetails.description}</h3>
            {/* <h4>{new Date(movieDetails.duration * 1000).toISOString().substr(11, 8)}</h4> */}
        </section>
    )
}

export default MovieDetails;