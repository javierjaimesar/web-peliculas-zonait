import MovieCard from './MovieCard';

function MoviesForCategory({ category, movies }) {
    console.log(category);

    return (
        <>
            <h2 className="text-2xl font-semibold px-4 text-white">{category}</h2>
            <div id="moviesForCategory" className="p-4 z-50">
                {
                    movies.map((movie) => {
                        return (
                            <>
                                {
                                    (category === ((movie.Genre).split(', '))[0] || category === ((movie.Genre).split(', '))[1] || category === ((movie.Genre).split(', '))[2]) && <MovieCard key={category} category={category} movie={movie} />
                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MoviesForCategory