import { createContext, useEffect, useState } from "react";
import { useMovies } from "../hook/useMovies";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const { movies, loading, getMovies } = useMovies();
  const [category, setCategory] = useState("Todas");

  useEffect(() => {
    getMovies();
  }, []);

  const findMovie = (id) => {
    return movies.filter((movie) => {
      return movie.id === id;
    });
  };

  const searchMovies = (search) => {
    const newSearch = search.toUpperCase();
    getMovies();

    // if (search === "") return;

    console.log(movies);

    return movies.filter((movie) => {
      const { title, director, actors } = movie;
      const movieInfo = `${title} ${director} ${actors}`.toUpperCase();
      return movieInfo.includes(newSearch);
    });
  };

  return (
    <DataContext.Provider
      value={{
        movies,
        loading,
        getMovies,
        findMovie,
        searchMovies,
        category,
        setCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
