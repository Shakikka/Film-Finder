import './MovieDetails.css';

const MovieDetails = ({ movieDetails }) => {

    console.log(movieDetails)
    return <p className='title'>{movieDetails.title}</p>
}

export default MovieDetails;