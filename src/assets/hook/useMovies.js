import { useState, useCallback, useEffect } from 'react';
import { allMovies } from '../services/movies';

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const newMovies = await allMovies();
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return { movies, getMovies, loading, error };
}
