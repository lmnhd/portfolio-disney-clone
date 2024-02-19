import MovieCarousel from "@/components/moviecarousel";
import { getDiscoveryMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  if (!id) return notFound();
  if (!genre) return notFound();

 const movies = await getDiscoveryMovies(id)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Results for {genre}
        </h1>
        <MovieCarousel title={genre} movies={movies} isVertical/>
      </div>
    </div>
  );
}

export default GenrePage;
