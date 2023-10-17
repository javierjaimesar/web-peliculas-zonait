export const allMovies = async () => {
    try {
        const response = await fetch('https://api-peliculas-5173.onrender.com/api/movies/')
        const movies = await response.json()

        return movies?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
            genre: (movie.Genre),
            director: movie.Director,
            writer: movie.Writer,
            actors: movie.Actors,
            plot: movie.Plot,
            duration: movie.Runtime,
        }))
    } catch (e) {
        throw new Error('Error searching movies')
    }
}