import MovieItem from './MovieItem'

export default function MovieList({ movies }) {
    if (typeof movies == `undefined` || movies.length === 0) return <h1 className='font-bold p-12'>Não encontramos filmes :(</h1>
    return (
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6'>
                {movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
            </div>

    )
}