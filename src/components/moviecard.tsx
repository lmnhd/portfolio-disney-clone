import Image from "next/image";
import { Movie } from "../../typings";
import getImagePath from "@/lib/getImagePath";

export type Props = {
  movie: Movie;
};
function MovieCard({ movie }: Props) {
  return (
    <div className="relative flex-shrink-0 cursor-pointer transform hover:drop-shadow-lg hover:scale-105 transition duration-200 ease-out">
      <div 
      className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80"
      />

      <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>

      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 rounded-sm"
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        width={1920}
        height={1080}
        alt={movie.title}
        key={movie.id}
      />
    </div>
  );
}

export default MovieCard;
