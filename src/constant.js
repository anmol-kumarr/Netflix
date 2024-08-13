export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.MOVIE_ACCESS_TOKEN
    }
};