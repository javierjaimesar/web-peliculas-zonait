import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import MovieCard from './MovieCard';

function MoviesForCategory({ category }) {
    const { allMovies } = useContext(DataContext)

    const forCategory = allMovies.filter((movie) => {
        return (category === ((movie.genre).split(', '))[0] || category === ((movie.genre).split(', '))[1] || category === ((movie.genre).split(', '))[2])
    })

    console.log(forCategory);

    return (
        <>
            <h2 className="text-2xl font-semibold px-4 text-white">{category}</h2>
            <div id="moviesForCategory" className="p-4 z-50">
                {
                    forCategory.map((movie) => {
                        return <MovieCard key={movie.id} category={category} movie={movie} />
                    })
                }
            </div>
        </>
    )
}

export default MoviesForCategory