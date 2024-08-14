export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:process.env.REACT_APP_MOVIE_ACCESS_TOKEN
    }
};