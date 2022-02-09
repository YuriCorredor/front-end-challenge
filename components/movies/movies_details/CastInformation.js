import CastMemberCard from './CastMemberCard'

export default function CastInformation({ cast }) {

    if (!cast || cast.length === 0) return <></>

    return (
        <div className='mt-24 sm:mx-16 mx-2'>
            <h1 className='font-bold mb-6 text-xl'>Elenco Original</h1>
            <div className='flex overflow-x-auto scrollbar-cast'>
                {cast.flatMap((member, index) => {
                    if (index >= 12) return []
                    return <CastMemberCard key={index} member={member} />
                }
                )}
            </div>
        </div>
    )
}