import MovieList from '../MovieList'

export default function MovieRecommendations({ recommendations }) {

    if (!recommendations) return <></>
    if (recommendations?.results?.length === 0) return <></>

    return (
        <div className='sm:mx-16 mx-2 mt-16'>
            <h1 className='font-bold text-xl pb-8'>Recomendações</h1>
            <MovieList movies={recommendations.results} />
        </div>
    )
}