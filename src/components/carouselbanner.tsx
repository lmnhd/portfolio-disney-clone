"use client"
import { Movie } from '../../typings'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import Image from 'next/image'
import getImagePath from '@/lib/getImagePath'

type Props = {
    movies: Movie[]
    
}
AutoPlay.globalOptions = { delay: 8000 }
function CarouselBanner({movies}:Props) {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100}, [AutoPlay()])
  return (
    <div 
    className='flex overflow-hidden lg:-mt-40 relative cursor-pointer'
    ref={emblaRef}
    >
        <div className='flex'>
            {movies.map((movie) => (
                <div
                key={movie.id}
                className='flex-full min-w-0 relative'
                >
                    <Image
                    key={movie.id}
                    src={getImagePath(movie.backdrop_path, true)}
                    alt={movie.title}
                    width={1920}
                    height={1080}
                    />

                    <div
                    className='hidden md:inline absolute mt-0 top-0 left-0 lg:pt-52 z-20 bg-transparent lg:mt-40 pt-40  h-full w-full bg-gradient-to-r via-gray-900/90 from-gray-900/90 to-transparent text-white p-10'
                    >
                        <h2
                        className='text-5xl font-bold max-w-xl z-30 mb-20'
                        >{movie.title}</h2>
                        <p
                        className='max-w-xl text-lg line-clamp-3'
                        >{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
        <div
        className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]'
        />
    </div>
  )
}

export default CarouselBanner