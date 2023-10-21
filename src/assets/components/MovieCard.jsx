import { Link } from "react-router-dom";

function MovieCard({ movie, isHovered }) {
  return (
    <div className={`w-auto movie-card ${isHovered ? "hovered" : ""}`}>
      <Link to={`/view/${movie.id}`}>
        <img
          id="img-poster"
          src={movie.poster}
          alt={movie.title}
          className="shadow-lg w-80 min-w-0 aspect-[5/7] rounded-md"
        />
        <h3 className="text-base font-medium text-gray-200 text-xs md:text-sm xl:text-base">
          {movie.title}
        </h3>
      </Link>
    </div>
  );
}

export default MovieCard;
