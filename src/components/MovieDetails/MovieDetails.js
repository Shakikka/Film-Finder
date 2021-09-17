import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../apiCalls';
import './MovieDetails.css';

const MovieDetails = ({ id }) => {
    
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        fetchMovieDetails(id)
        .then(movie => {
            setMovieDetails(movie.data)
        })
    }, [id])

    const { description, duration, releaseDate, genres, topCast, title } = movieDetails
    const backgroundImage = { backgroundImage: 'url(/assets/movieHeroImages/' + id + '.jpeg), url(/assets/movieHeroImages/defaultImage.jpeg)'}
    
    return (
        <section className='movie-details' style={backgroundImage}>
            <div className='background-box'>
                <h2 className='title'>{title}</h2>
                <h3>{description}</h3>
                <h5>{duration && new Date(duration * 1000).toISOString().substr(11, 8)}</h5>
                <h5>{releaseDate}</h5>
                <h5>{genres && genres.join(', ')}</h5>
                <ul>{topCast && topCast.map((member, i) => {
                    return <li key={i + 1}>{`${member.name} as ${member.characterName}`}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default MovieDetails;