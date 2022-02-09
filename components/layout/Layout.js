import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className='flex-1 min-h-screen min-w-full'>
            <div className='h-[36px] bg-[#5C16C5] flex justify-center items-center sm:justify-start'>
                <Link href='/'>
                    <h1 className='cursor-pointer place-self-center sm:ml-16 text-white font-bold text-lg'>TMDB</h1>
                </Link>
                <span className='ml-1 place-self-center bg-white h-[18px] w-10 rounded-lg'></span>
            </div>
            {children}
        </div>
    )
}