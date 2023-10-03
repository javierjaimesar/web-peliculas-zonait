import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import colectivo from '../img/colectivo1.jpg';
import video from '../video/trailer.mp4';

import searchIcon from '../icon/search.svg';
import backIcon from '../icon/back.svg';

function ViewMovie() {
  const [movieTitle, setMovieTitle] = useState('')
  const params = useParams();

  useEffect(() => {
    const movie = params.movieTitle
    setMovieTitle(movie)
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
            <h3 className='text-2xl font-semibold' >{movieTitle}</h3>
            <div className='flex gap-2 text-base text-zinc-400'>
              <p>2015</p>
              <p>-</p>
              <p>126 min</p>
            </div>
            <div className='flex flex-col gap-2 max-w-7xl'>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati pariatur, natus mollitia voluptatum delectus dolorem similique, harum dolore minus corporis labore! Architecto minus cumque dolor omnis similique totam ratione?
              </p>
              <div className='text-sm text-zinc-400'>
                <p><b> Actores:</b> Robert Downey Jr., Gwyneth Paltrow, Terrence Howard</p>
                <p><b>Escritores:</b> Mark Fergus, Hawk Ostby, Art Marcum</p>
                <p><b>Director:</b> Jon Favreau</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewMovie