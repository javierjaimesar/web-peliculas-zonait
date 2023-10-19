import Spinner from "./Spinner";
import MovieCard from "../components/MovieCard";

function MostrarPeliculas({ movies }) {
  return (
    <div className="movies">
      {movies?.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

function NoPeliculas() {
  return <h3>No se encontraron peliculas</h3>;
}

export function MoviesVerify({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies ? <MostrarPeliculas movies={movies} /> : <NoPeliculas />;
}

export function Movies({ movies, loading }) {
  return loading ? <Spinner /> : <MoviesVerify movies={movies} />;
}
