import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import MovieCard from "./MovieCard";
import Skeleton from "./Skeleton";

function MoviesForCategory({ category }) {
  const { movies, loading } = useContext(DataContext);

  const forCategory = movies.filter((movie) => {
    return (
      category === movie.genre.split(", ")[0] ||
      category === movie.genre.split(", ")[1] ||
      category === movie.genre.split(", ")[2]
    );
  });

  console.log(forCategory);

  return (
    <>
      <h2 className="text-2xl font-semibold px-4 text-white">{category}</h2>
      <div id="moviesForCategory" className="p-4 z-50">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((index) => <Skeleton key={index} />)
          : forCategory.map((movie) => {
              return (
                <MovieCard key={movie.id} category={category} movie={movie} />
              );
            })}
      </div>
    </>
  );
}

export default MoviesForCategory;
