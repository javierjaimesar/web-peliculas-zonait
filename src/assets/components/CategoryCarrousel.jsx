import { useContext, useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="container min-w-full p-0">
      <h2 className="text-base md:text-lg xl:text-xl font-semibold text-white pt-2 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-12">
        {category}
      </h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={10}
        slidesPerView={3.2}
        slidesPerGroup={3}
        breakpoints={{
          640: {
            modules: [A11y],
            slidesPerView: 4.2,
            slidesPerGroup: 4,
          },
          768: {
            modules: [A11y],
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1280: {
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="py-4"
      >
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
              <SwiperSlide key={index}>
                <Skeleton />
              </SwiperSlide>
            ))
          : movies
              ?.sort((a, b) => a.title.localeCompare(b.title))
              .map((movie) => {
                return (
                  <div key={movie.id}>
                    {category === movie.genre.split(", ")[0] ||
                    category === movie.genre.split(", ")[1] ||
                    category === movie.genre.split(", ")[2] ? (
                      <SwiperSlide
                        key={movie.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <MovieCard movie={movie} isHovered={isHovered} />
                      </SwiperSlide>
                    ) : null}
                  </div>
                );
              })}
      </Swiper>
      <div className="mt-1 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-12">
        <hr className="border-gray-600" />
      </div>
    </section>
  );
}

export default CategoryCarrousel;
