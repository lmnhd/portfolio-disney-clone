import { getDiscoveryMovies } from "@/lib/getMovies";
import React from "react";
import CarouselBanner from "./carouselbanner";

async function CarouselBannerWrapper({
  id,
  keywords,
}: {
  id?: string;
  keywords?: string;
}) {
  const movies = await getDiscoveryMovies(id, keywords);
  
  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
