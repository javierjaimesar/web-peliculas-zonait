import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

import MovieCard from './MovieCard';
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function CategoryCarrousel({ category, movies }) {
  const { allMovies } = useContext(DataContext)

  // console.log(category);
  return (
    <section className="container ps-2 sm:ps-5 min-w-full" >
      <h2 className="text-xl font-semibold pb-2 text-white">{category}</h2>
      {/* <div id='carrousel' className='glider'>
        {
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div> */}
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={3.3}
        slidesPerGroup={3}
        breakpoints={{
          640: {
            modules: [A11y],
            slidesPerView: 4.3,
            slidesPerGroup: 4,
          },
          800: {
            modules: [A11y],
            slidesPerView: 5.3,
            slidesPerGroup: 5,
          },
          1024: {
            slidesPerView: 6.3,
            slidesPerGroup: 6,
          },
          1280: {
            slidesPerView: 8.3,
            slidesPerGroup: 7,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          allMovies.map((movie) => {
            // console.log(((movie.Genre).split(', '))[1])
            return (
              <div key={movie.id}>
                {
                  (category === ((movie.genre).split(', '))[0] || category === ((movie.genre).split(', '))[1] || category === ((movie.genre).split(', '))[2]) &&
                  <SwiperSlide key={movie.id} className='min-w-0' >
                    <MovieCard movie={movie} category={category} />
                  </SwiperSlide>
                }
              </div>
            )
          })
        }

      </Swiper>
      <div className='my-6 pr-2 sm:pr-5'>
        <hr className='border-gray-600' />
      </div>
    </section >
  );
}

export default CategoryCarrousel;
