import { createContext } from "react";
import { useMovies } from "../hook/useMovies";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const { movies, loading, getMovies } = useMovies("");

  const findMovie = (id) => {
    return movies.filter((movie) => {
      return movie.id === id;
    });
  };

  const searchMovies = (search) => {
    const newSearch = search.toUpperCase();

    if (search === "") return;

    return movies.filter((movie) => {
      return (
        movie.title.toUpperCase().includes(newSearch) ||
        movie.director.toUpperCase().includes(newSearch) ||
        movie.actors.toUpperCase().includes(newSearch)
      );
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
