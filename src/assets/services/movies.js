export const allMovies = async () => {

    const apiMartin = 'http://dispositivos.ingenieriadelnoa.com.ar:8381/pelis'
    const apiJavier = 'https://api-peliculas-5173.onrender.com/api/movies'

    try {
        const response = await fetch(apiMartin)
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