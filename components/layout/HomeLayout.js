import GenreItem from './GenreItem'

export default function HomeLayout({ children, genres, filters }) {

    if(!genres) return <></>

    return (
        <>
        <div className='bg-[#2D0C5E] pb-3 mb-5'>
            <h1 className='text-white sm:text-center sm:px-36 px-6 mx-2 sm:pt-8 pt-8 text-2xl sm:text-4xl font-bold'>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
            <p className='p-8 pb-2 text-white text-xs sm:text-center font-bold'>FILTRE POR:</p>
            <div className='flex flex-wrap p-6 sm:px-20 pt-0 sm:justify-center'>
                {genres.map(genre => {
                    return <GenreItem key={genre.id} previousGenres={filters} genre={genre} />
                })}
            </div>
        </div>
        {children}
        </>
    )
}
