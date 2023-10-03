import { createContext } from 'react';

import { movies } from '../services/pelis'

export const DataContext = createContext()

export function DataProvider({ children }) {
    const allMovies = movies?.map((movie) => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster,
            year: movie.Year,
            genre: movie.Genre,
            director: movie.Director,
            writer: movie.Writer,
            actors: movie.Actors,
            plot: movie.Plot,
            duration: movie.Runtime
        }
    })

    const allCategorys = movies.map((movie) => {
        return ((movie.Genre).split(','))[0]
    })

    const categorys = allCategorys.filter((categoria, index) => {
        return allCategorys.indexOf(categoria) === index;
    })

    const findMovie = (id) => {
        return allMovies.filter((movie) => {
            return movie.id === id;
        })
    }

    return (
        <DataContext.Provider value={{
            allMovies,
            categorys,
            findMovie
        }}>
            {children}
        </DataContext.Provider>
    )
}