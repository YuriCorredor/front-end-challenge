import Link from 'next/link'
import { MdCancel } from 'react-icons/md';

export default function GenreItem({ genre, previousGenres }) {

    const getHref = (genreId, previousGenres) => {
        return !previousGenres ? `/1/${genreId}` : `/1/${previousGenres}${previousGenres.includes(genreId) ? '' : `,${genreId}`}`
    }

    return (
        <Link href={getHref(genre.id, previousGenres)}>
            <div className={`flex m-1 hover:bg-[#D18000] ${previousGenres?.includes(genre.id) ? 'bg-[#D18000]' : 'bg-white'} group  w-fit rounded-lg`}>
                <p className={`p-2 self-center hover:cursor-pointer text-sm group-hover:text-white ${previousGenres?.includes(genre.id) ? 'text-white pr-1' : 'text-[#323232]'} font-bold`}>{genre.name}</p>
                {previousGenres?.includes(genre.id) ? 
                <div className='self-center my-2 mr-2 hover:bg-[#5C16C5] cursor-pointer rounded-lg'>
                    <Link href={`/1/${previousGenres.replace(',' + genre.id, '').replace(genre.id, '')}`}>
                        <MdCancel color='white' />
                    </Link>
                </div> : <></>}
            </div>
        </Link>
    )
}