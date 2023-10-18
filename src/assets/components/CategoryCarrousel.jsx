import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import MovieCard from "./MovieCard";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Skeleton from "./Skeleton";

function CategoryCarrousel({ category }) {
  const { movies, loading } = useContext(DataContext);

  const prueba = true;

  return (
    <section className="container ps-2 pr-0 sm:ps-5 min-w-full">
      <h2 className="text-xl font-semibold pb-2 text-white">{category}</h2>
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
        onSlideChange={() => console.log("slide change")}
      >
        {/* Mostrar el esqueleto por defecto mientras se carga */}
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <SwiperSlide key={index}>
                <Skeleton />
              </SwiperSlide>
            ))
          : movies?.map((movie) => {
              return (
                <div key={movie.id}>
                  {(category === movie.genre.split(", ")[0] ||
                    category === movie.genre.split(", ")[1] ||
                    category === movie.genre.split(", ")[2]) && (
                    <SwiperSlide key={movie.id} className="min-w-0">
                      <MovieCard movie={movie} category={category} />
                    </SwiperSlide>
                  )}
                </div>
              );
            })}
      </Swiper>
      <div className="mt-6 pr-2 sm:pr-5">
        <hr className="border-gray-600" />
      </div>
    </section>
  );
}

export default CategoryCarrousel;
