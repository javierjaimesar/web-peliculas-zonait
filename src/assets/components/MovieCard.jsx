import {Link} from 'react-router-dom';

function MovieCard({ movie, category }) {
  return (
      <div className="w-auto" >
        <Link to={`/View/${movie.Title}`}>
          <img id="img-poster" src={movie.Poster} alt={movie.Title} className="shadow-lg w-80 min-w-0 aspect-[5/7] rounded-md" />
          <h3 className="text-base font-medium text-gray-200">
            {movie.Title}
          </h3>
        </Link>
      </div>
  );
}

export default MovieCard;
