import Image from 'next/image'
import castPlaceholder from '../../../public/placeholders/cast-placeholder.webp'
import { useState, useEffect } from 'react'

export default function CastMemberCard({ member }) {

    const [src, setSrc] = useState(`https://www.themoviedb.org/t/p/w138_and_h175_face/${member.profile_path}`)

    useEffect(() => {
      setSrc(`https://www.themoviedb.org/t/p/w138_and_h175_face/${member.profile_path}`)
    }, [member]);
    

    return (
        <div className='scrollbar-cast-card flex flex-col overflow-x-auto min-w-[175px] px-2 pb-8'>
            <div className='shadow-lg bg-white rounded-lg p-2 h-full'>
                <Image
                    onError={() => setSrc(castPlaceholder)}
                    className='rounded-md' 
                    width={145} 
                    height={180} 
                    src={src}
                />
                <h1 className='mt-2 font-bold text-lg'>{member.name}</h1>
                <p className='font-roboto mt-1'>{member.character}</p>
            </div>
        </div>
    )
}