import MovieDetailsItem from '../../components/movies/movies_details/MovieDetailsItem'
import Head from 'next/head'

export default function MovieDetails(props) {
    const movie = props.movies
    const releaseDates = props.releaseDates.results
    const crew = props.crew
    const videos = props.videos
    const recommendations = props.recommendations

    return (
        <>
            <Head>
                <title>{movie?.title} - TMDB</title>
                <meta name='description' content='Navegue por uma lista imensa e ativa dos filmes mais populares de hoje' />
            </Head>
            <MovieDetailsItem recommendations={recommendations} videos={videos} crew={crew} releaseDates={releaseDates} movie={movie} />
        </>
    )
}

export async function getServerSideProps(context) {
    const movieId = context.params.movieId
    const API_KEY = process.env.API_KEY
    
    const movies = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
    const releaseDates = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${API_KEY}`)
    const crew = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`)
    const videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`)
    const recommendations = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}&language=pt-BR`)

    const moviesJson = await movies.json()
    const releaseDatesJson = await releaseDates.json()
    const crewJson = await crew.json()
    const videosJson = await videos.json()
    const recommendationsJson = await recommendations.json()

    return {
        props: {
            movies: moviesJson,
            releaseDates: releaseDatesJson,
            crew: crewJson,
            videos: videosJson,
            recommendations: recommendationsJson
        }
    }

}