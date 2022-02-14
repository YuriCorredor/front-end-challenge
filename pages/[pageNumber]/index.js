import MovieList from '../../components/movies/MovieList'
import HomeLayout from '../../components/layout/HomeLayout'
import Pagination from '../../components/pagination/Pagination'
import Head from 'next/head'

export default function moviePages(props) {
    const pageNumber = parseInt(props.pageNumber)
    const movies = props.movies.results
    const genres = props.genres.genres

    return (
        <>
            <Head>
                <title>Filmes Populares - {pageNumber > 1 ? `${pageNumber}` : `TMDB`}</title>
                <meta name='description' content='Navegue por uma lista imensa e ativa dos filmes mais populares de hoje' />
            </Head>
            <HomeLayout genres={genres}>
                <div className='sm:mx-32 mx-2'>
                    <MovieList movies={movies} />
                </div>
                <Pagination pageNumber={pageNumber} numberOfPages={500} />
            </HomeLayout>
        </>
    )
}

export async function getServerSideProps(context) {
    const pageNumber = context.params.pageNumber
    const API_KEY = process.env.API_KEY
    
    const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${pageNumber}`, {
        method: 'GET'
    })
    const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)

    const moviesJson = await movies.json()
    const genresJson = await genres.json()

    return {
        props: {
            movies: moviesJson,
            genres: genresJson,
            pageNumber
        }
    }
}