import HomeLayout from '../../../components/layout/HomeLayout'
import MovieList from '../../../components/movies/MovieList'
import Pagination from '../../../components/pagination/Pagination'
import Head from 'next/head'

export default function FilteredMovies(props) {

    const pageNumber = parseInt(props.pageNumber)
    let numberOfPages = parseInt(props.movies.total_pages)
    const filters = props.filters
    const genres = props.genres.genres
    const movies = props.movies.results

    if (numberOfPages >= 500) numberOfPages = 500

    return (
        <>
            <Head>
                <title>Filmes Populares - {pageNumber > 1 ? `${pageNumber}` : `TMDB`}</title>
                <meta name='description' content='Navegue por uma lista imensa e ativa dos filmes mais populares de hoje' />
            </Head>
            <HomeLayout filters={filters} genres={genres}>
                <div className='sm:mx-32 mx-2'>
                    <MovieList movies={movies} />
                </div>
                <Pagination filters={filters} pageNumber={pageNumber} numberOfPages={numberOfPages} />
            </HomeLayout>
        </>
    )
}

export async function getServerSideProps(context) {
    const API_KEY = process.env.API_KEY
    const pageNumber = context.params.pageNumber
    const filters = context.params.filters

    const movies = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&with_genres=${filters}&page=${pageNumber}`)
    const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)

    const moviesJson = await movies.json()
    const genresJson = await genres.json()

    return {
        props: {
            movies: moviesJson,
            genres: genresJson,
            pageNumber,
            filters
        }
    }
}