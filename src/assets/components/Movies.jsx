import { useState } from "react"
import MovieCard from '../components/MovieCard';

function MostrarPeliculas ({movies}) {
  const [hover,setHover] = useState(false)

  const handleHover = () => {
    setHover(!hover)
  } 
  
  return (
    <div className="movies">
      {
        movies.map((movie) => {
          return (  
            <MovieCard movie={movie} key={movie.id} />
          )
        })
      }
    </div>
    )
  }

function NoPeliculas () {
    return (
      <h3>No se encontraron peliculas</h3>
    )
}

export function MoviesVerify ({movies}) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies 
            ?  <MostrarPeliculas movies={movies}/>
            :  <NoPeliculas/>
        )
}

export function Movies({movies,loading}){
  return(
    loading ? <p>Cargando...</p> : <MoviesVerify movies={movies} />
  )
}