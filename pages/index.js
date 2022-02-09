import MovieList from '../components/movies/MovieList'
import HomeLayout from '../components/layout/HomeLayout'
import Pagination from '../components/pagination/Pagination'
import Head from 'next/head'

export default function Home(props) {

  const movies = props.movies.results
  const genres = props.genres.genres

  return (
    <>
      <Head>
        <title>Filmes Populares - TMDB</title>
        <meta name='description' content='Navegue por uma lista imensa e ativa dos filmes mais populares de hoje' />
      </Head>
      <HomeLayout genres={genres}>
        <div className='sm:mx-32 mx-2'>
          <MovieList movies={movies}/>
        </div>
        <Pagination pageNumber={1} numberOfPages={500}/>
      </HomeLayout>
    </>
  )
  
}

export async function getStaticProps() {
  const API_KEY = process.env.API_KEY
  
  const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`, {
    method: 'get'
  })
  const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)

  const moviesJson = await movies.json()
  const genresJson = await genres.json()

  return {
    props: {
      movies: moviesJson,
      genres: genresJson
    },
    revalidate: 86400 // it's going to update every 1 day
  }
}
