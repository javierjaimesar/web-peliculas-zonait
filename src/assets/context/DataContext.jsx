import { createContext, useRef, useState, useCallback } from 'react';

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

    const getMovies = (search) => {
        const newSearch = search.toUpperCase()

        if(search === '') return

        return allMovies.filter((movie) => {
            return ((movie.title).toUpperCase().includes(newSearch) || 
            (movie.director).toUpperCase().includes(newSearch) ||  
            (movie.actors).toUpperCase().includes(newSearch));
        })
    }

    // const getMovies = useCallback(async ({ search }) => {
    //     const [movies, setMovies] = useState([])
    //     const [loading, setLoading] = useState(false)
    //     const [, setError] = useState(null)
    //     const busquedaAnterior = useRef(search)

    //     if (search === busquedaAnterior.current) return

    //     try {
    //         setLoading(true)
    //         setError(null)
    //         busquedaAnterior.current = search
    //         const newMovies = await searchMovies({ search })
    //         setMovies(newMovies)
    //     } catch (e) {
    //         setError(e.message)
    //     } finally {
    //         setLoading(false)
    //     }
    // }, [])

    return (
        <DataContext.Provider value={{
            allMovies,
            categorys,
            findMovie,
            getMovies
        }}>
            {children}
        </DataContext.Provider>
    )
}