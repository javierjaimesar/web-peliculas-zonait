import { DataContext } from "../context/DataContext";

import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoPlayer from "../components/VideoPlayer";

import video from "../video/trailer.mp4";
import video1 from "../video/unidad2.mp4";

function ViewMovie() {
  const { findMovie } = useContext(DataContext);

  // const [movie, setMovie] = useState([]);
  const params = useParams();
  const movieIdParams = params.movieId;

  console.log(movieIdParams);
  console.log(findMovie(movieIdParams));

  const movie = findMovie(movieIdParams)[0];

  // useEffect(() => {
  //   getMovies();
  //   console.log(movieIdParams);
  //   console.log(findMovie(movieIdParams)[0]);
  //   console.log(movie);
  // }, [movie]);

  // const videoJsOptions = {
  //   autoplay: true,
  //   controls: true,
  //   sources: [
  //     {
  //       src: video,
  //       type: "video/mp4",
  //     },
  //   ],
  // };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col h-full min-h-screen bg-black text-white">
        <Navbar position={""} logo={false} />
        <div className="body-wrapper mb-10">
          <div className="bg-black flex flex-col items-center text-white">
            <div className="flex flex-col justify-center overflow-hidden">
              {/* <video controls autoPlay className="max-h-96">
                <source src={video} type="video/mp4" />
              </video> */}
              <VideoPlayer video={video} video1={video1}></VideoPlayer>
              <div className="px-4 flex flex-col gap-2 justify-start max-w-5xl">
                <h3 className="text-2xl font-semibold">{movie?.title}</h3>
                <div className="flex gap-2 text-base text-zinc-400">
                  <p>{movie?.year}</p>
                  <p> - </p>
                  <p>{movie?.duration}</p>
                </div>
                <div className="flex flex-col gap-2 max-w-7xl">
                  <p className="text-lg">{movie?.plot}</p>
                  <div className="text-sm text-zinc-400">
                    {movie?.actors !== "N/A" && (
                      <p>
                        <b>Actores: </b>
                        {movie?.actors}
                      </p>
                    )}
                    {movie?.writer !== "N/A" && (
                      <p>
                        <b>Escritor: </b>
                        {movie?.writer}
                      </p>
                    )}
                    {movie?.director !== "N/A" && (
                      <p>
                        <b>Director: </b>
                        {movie?.director}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ViewMovie;
