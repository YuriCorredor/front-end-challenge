import Image from 'next/image'
import moviePlaceholder from '../../../public/placeholders/movie-placeholder.webp'
import { useState, useEffect } from 'react'

export default function MoviePoster({ src }) {

    const [srcPoster, setSrcPoster] = useState(`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${src}`)

    useEffect(() => {
        setSrcPoster(`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${src}`)
    }, [src]);
    

    return (
        <div className='px-8 sm:px-16 stick mt-12 sm:mt-0 sm:relative static sm:max-w-fit sm:max-h-fit max-w-[350px] max-h-[500px] top-16 left-0'>
            <Image
                onError={() => setSrcPoster(moviePlaceholder)}
                className='shadow-xl rounded-lg' 
                width={600} 
                height={900}
                placeholder='blur'
                blurDataURL={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2_filter(blur)/${src}`}
                src={srcPoster}
            />
        </div>
    )
}