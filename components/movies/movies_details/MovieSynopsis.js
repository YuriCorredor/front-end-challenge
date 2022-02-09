export default function MovieSynopsis({ movieSynopsis }) {

    if (typeof movieSynopsis == `undefined` || movieSynopsis === ``) return <></>

    return (
        <div className='py-2 px-2 sm:px-0 text-white lg:mr-32 md:mr-12 sm:mr-8'>
            <h1 className='font-bold text-[22px] py-2'>Sinopse</h1>
            <p className='font-roboto py-1'>{movieSynopsis}</p>
        </div>
    )
}