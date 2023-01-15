import MovieInformation from './MovieInformation'
import MovieSynopsis from './MovieSynopsis'
import CrewInformation from './CrewInformation'
import CastInformation from './CastInformation'
import MoviePoster from './MoviePoster'
import TrailerSection from './TrailerSection'
import MovieRecommendations from './MovieRecommendations'
import MovieConsensus from './MovieConsensus'

export default function MovieDetailsItem({ movie, releaseDates, crew, videos, recommendations }) {
    return (
        <>
            <div className='flex w-full sm:flex-row items-center sm:items-start flex-col bg-[#2D0C5E]'>
                <MoviePoster src={movie.poster_path} />
                <div className='flex sm:w-full flex-col sm:pt-16 pt-6'>
                    <MovieInformation movie={movie} releaseDates={releaseDates} />
                    <MovieConsensus score={parseFloat(movie.vote_average).toFixed(2)} />
                    <MovieSynopsis movieSynopsis={movie.overview} />
                    <CrewInformation crew={crew} />
                </div>
            </div>
            <CastInformation cast={crew.cast} />
            <TrailerSection videos={videos} />
            <MovieRecommendations recommendations={recommendations} />
        </>
    )
}