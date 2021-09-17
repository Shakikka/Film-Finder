const url = 'https://code-challenge.spectrumtoolbox.com/api/movies';
const apiKey = process.env.REACT_APP_API_KEY;

const checkForError = (response) => {
    if(!response.ok) {
        throw new Error(response.status)
    } else {
        return response.json()
    }
}

export const fetchMovies = () => {
    return fetch(url, {
        headers: {
            Authorization: `Api-Key ${apiKey}`,
        },
    })
    .then(checkForError)
}

export const fetchMovieDetails = id => {
    return fetch(`${url}/${id}`, {
        headers: {
            Authorization: `Api-Key ${apiKey}`,
        },
    })
    .then(checkForError)
}