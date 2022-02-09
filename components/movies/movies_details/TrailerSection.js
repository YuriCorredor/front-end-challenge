export default function TrailerSection({ videos }) {

    if (!videos) return <></>

    const getVideoSrc = videos => {
        let src = ''

        if (!videos | videos.length === 0) return src

        for (var i = 0;i < videos.length; i++) {
            const video = videos[i] 
            if (video.type === 'Trailer' & video.official) {
                src = video.key
                break
            } else if (video.type === 'Trailer') {
                src = video.key
            } else if (video.official) {
                src = video.key
            }
        }

        return src
    }

    if (getVideoSrc(videos.results) === '') return <></>

    return (
        <div className={`sm:mx-16 mx-2 mt-12 mb-4`}>
            <h1 className='font-bold text-xl'>Trailer</h1>
            <iframe className='w-full max-w-[800px] mt-6' fs='0' iv_load_policy='3' width='650' height='450'
                src={`https://www.youtube-nocookie.com/embed/${getVideoSrc(videos.results)}?iv_load_policy=3&controls=0&rel=0`}>
            </iframe>  
        </div>
        
    )
}