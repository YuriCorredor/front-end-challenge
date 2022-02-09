export default function CrewInformation({ crew }) {

    if (!crew.crew) return <></>

    const getCrewInfoToDisplay = crew => {
        const hierarchy = ['Director', 'Writer', 'Characters', 'Screenplay', 'Story', 'Creator', 'Novel']
        const newCrew = crew.flatMap(member => {
            for (var i = 0; i < hierarchy.length; i++) {
                if (member.job == hierarchy[i]) return member
            }
            return []
        })
        return newCrew
    }

    return (
        <div className='flex flex-wrap mt-8 mb-4 sm:ml-2 sm:ml-0 sm:mr-16 md:mr-0 text-white'>
            {getCrewInfoToDisplay(crew.crew).flatMap((member, index) => {
                if (index >= 5) return []
                else return (
                    <div key={index} className='last:mb-6 lg:pr-32 md:pr-12 pr-6 py-4 flex-col flex-wrap'>
                        <h1 className='font-bold text-md'>{member.name}</h1>
                        <p className='font-roboto text-sm'>{member.job}</p>
                    </div>
                )
            })}
        </div>
    )
}