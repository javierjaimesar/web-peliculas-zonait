import { DataContext } from '../context/DataContext';

import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import video from '../video/trailer.mp4';

import searchIcon from '../icon/search.svg';
import backIcon from '../icon/back.svg';

function ViewMovie() {
  const { findMovie } = useContext(DataContext)

  const [movieId, setMovieId] = useState('')
  const [movie, setMovie] = useState([])
  const params = useParams();

  useEffect(() => {
    const movieIdParams = params.movieId
    setMovieId(movieIdParams)
    setMovie((findMovie(movieIdParams))[0])
  }, [])

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: video,
      type: 'video/mp4'
    }]
  }

  return (
    <div className='bg-black h-screen'>
      <nav className='flex justify-between py-5 px-10'>
        <Link to={'/'} >
          <img src={backIcon} alt={backIcon} />
        </Link>
        <Link to={'/'} >
          <img src={searchIcon} alt={searchIcon} className='pr-2 py-1' />
        </Link>
      </nav>
      <div className='flex flex-col items-center text-white'>
        <div>
          <video controls autoPlay>
            <source src={video} type="video/mp4" />
          </video>
          <div className='px-4 flex flex-col gap-2 justify-start max-w-5xl'>
            <h3 className='text-2xl font-semibold' >{movie?.title}</h3>
            <div className='flex gap-2 text-base text-zinc-400'>
              <p>{movie?.year}</p>
              <p> - </p>
              <p>{movie?.duration}</p>
            </div>
            <div className='flex flex-col gap-2 max-w-7xl'>
              <p className='text-lg'>
                {movie.plot}
              </p>
              <div className='text-sm text-zinc-400'>
                <p><b>Actores: </b>{movie.actors}</p>
                <p><b>Escritores: </b>{movie.writer}</p>
                <p><b>Director: </b>{movie.director}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewMovie