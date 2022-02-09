import Image from 'next/image'
import Link from 'next/link'
import movieImagePlaceholder from '../../public/placeholders/movie-placeholder.webp'
import { useState } from 'react'

const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']

export default function MovieItem({ movie }) {

    const [src, setSrc] = useState(`https://www.themoviedb.org/t/p/w300_and_h450_face${movie.poster_path}`);

    const prettifyReleaseDate = releaseDate => {
        if (!releaseDate) return
        const [year, month, day] = releaseDate.split('-')
        return `${day} ${months[parseInt(month)-1]} ${year}`
    }

    return (
        <div className='max-w-[250px] justify-self-center'>
            <Link href={`/details/${movie.id}`}>
                <div className='cursor-pointer'>
                    <Image
                        className='rounded-sm' 
                        width={250} 
                        height={350} 
                        onError={() => setSrc(movieImagePlaceholder)}
                        placeholder='blur'
                        blurDataURL={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2_filter(blur)/${movie.poster_path}`}
                        src={src}
                    />
                    <p className='font-bold text-[13px] sm:text-[15px]'>{movie.title}</p>
                </div>
            </Link>
            <p className='font-bold text-[#646464] text-[11px] sm:text-[13px]'>{prettifyReleaseDate(movie.release_date)}</p>
        </div>
    )
}