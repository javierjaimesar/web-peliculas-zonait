import { useState, useCallback } from 'react'
import { allMovies } from '../services/movies'

export function useMovies() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [, setError] = useState(null)

    const getMovies = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const newMovies = await allMovies()
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])
    return { movies, getMovies, loading }
}