const url = 'https://code-challenge.spectrumtoolbox.com/api/movies';

const checkForError = (response) => {
    if(!response.ok) {
        throw new Error(response.status)
    } else {
        return response.json()
    }
}

export const getMovies = () => {
    return fetch(url, {
        headers: {
            Authorization: 'Api-Key q3MNxtfep8Gt',
        },
    })
    .then(checkForError)
}