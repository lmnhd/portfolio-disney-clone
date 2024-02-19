import CarouselBannerWrapper from "@/components/carouselbannerwrapper";
import MovieCarousel from "@/components/moviecarousel";
import { Button } from "@/components/ui/button";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {
  const upcomingMovies = await getUpComingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="">
      {/* <h1>Let&apos;s build Disney for Precious!</h1> */}



      
        <div className="flex flex-col space-y-2 xl:mt-48?">
          <CarouselBannerWrapper/>
          <MovieCarousel
             
            movies={upcomingMovies}
            title="Upcoming"
          />
          <MovieCarousel
            
            movies={topRatedMovies}
            title="Top Rated"
          />
          <MovieCarousel
            
            movies={popularMovies}
            title="Popular"
          />
        </div>
      
      {/* CarouselBannerWrapper */}
    </main>
  );
}
