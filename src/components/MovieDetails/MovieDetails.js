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
            <h5>{movieDetails.duration && new Date(movieDetails.duration * 1000).toISOString().substr(11, 8)}</h5>
            <ul>{movieDetails.topCast && movieDetails.topCast.map((member, i) => {
                return <li key={i + 1}>{`${member.name} as ${member.characterName}`}</li>
                })}
            </ul>
        </section>
    )
}

export default MovieDetails;