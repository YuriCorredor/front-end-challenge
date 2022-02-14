export default function MovieInformation({ movie, releaseDates }) {

    const getYear = releaseDate => {
        return releaseDate?.split('-')[0]
    }

    const getPrettifiedReleaseDate = releaseDate => {

        if (!releaseDate | releaseDate == '') return ''

        const [year, month, day] = releaseDate.split('-')
        return `${day}/${month}/${year}`
    }

    const getPrettifiedRunTime = runTime => {

        if (!runTime | runTime === '') return ''

        let runTimeInt = parseInt(runTime)
        if (runTimeInt <= 60) return `${runTime}m`
        let hours = Math.floor(runTimeInt/60)
        let minutes = runTimeInt - hours*60
        if (minutes === 0) return `${hours}h`
        return `${hours}h ${minutes}m`
    }

    const getGenres = genres => {
        let prettifiedGenres = ''

        if (!genres) return prettifiedGenres
        if (genres.length === 0) return prettifiedGenres

        genres.forEach((genre, i) => {
            prettifiedGenres = prettifiedGenres.concat(genre.name, !(i+1 == genres.length) ? ', ' : '')
        })

        return prettifiedGenres
    }

    const getAgeRestriction = releaseDates => {

        if (!releaseDates) return

        let releasedInBrazil = false
        let releasedInUs = false
        let brazilIndex
        let usIndex

        releaseDates?.forEach((element, i) => {
            if (element.iso_3166_1 === 'BR') {
                releasedInBrazil = true
                brazilIndex = i
            }
            if (element.iso_3166_1 === 'US') {
                releasedInUs = true
                usIndex = i
            }
        });

        if (releasedInBrazil) {
            const brazilCertification = releaseDates[brazilIndex].release_dates[0].certification
            if (isNaN(parseInt(brazilCertification)) && brazilCertification) return brazilCertification
            return brazilCertification ? (brazilCertification + ' anos') : ''
        }
        else if (releasedInUs) {
            const usCertification = releaseDates[usIndex].release_dates[0].certification
            if (isNaN(parseInt(usCertification)) && usCertification) return usCertification
            return usCertification ? (usCertification + ' anos') : ''
        }
        const randomCetification = releaseDates[0]?.release_dates[0]?.certification

        console.log(randomCetification === undefined)
        return randomCetification

    }

    return (
        <>
            <h1 className='text-white font-bold text-xl mx-2 sm:mx-0 text-[32px]'>{movie.title} ({getYear(movie.release_date)})</h1>
            <ul className='flex flex-wrap mx-2 sm:mx-0 my-2 flex-col sm:flex-row'>
                <li className={`text-white font-roboto pr-1 pl-0 sm:after:content-['•'] after:relative sm:after:w-2 after:ml-2 ${getAgeRestriction(releaseDates) == '' | getAgeRestriction(releaseDates) === undefined  ? 'hidden' : ''}`}>{getAgeRestriction(releaseDates)}</li>
                <li className={`text-white font-roboto pr-1 pl-0 sm:after:content-['•'] after:relative sm:after:w-2 after:ml-2 ${getPrettifiedReleaseDate(movie.release_date) == '' ? 'hidden' : ''}`}>{getPrettifiedReleaseDate(movie.release_date)}</li>
                <li className={`text-white font-roboto pr-1 pl-0 sm:after:content-['•'] after:relative sm:after:w-2 after:ml-2 ${getGenres(movie.genres) == '' ? 'hidden' : ''}`}>{getGenres(movie.genres)}</li>
                <li className={`text-white font-roboto pr-1 pl-0 ${getPrettifiedRunTime(movie.runtime) == '' ? 'hidden' : ''}`}>{getPrettifiedRunTime(movie.runtime)}</li>
            </ul>
        </>
    )
}