import Link from 'next/link'

export default function Pagination({ pageNumber, numberOfPages, filters }) {

    const paginationHandler = (pageNumber, numberOfPages) => {
        const newPageNumbers = Array.apply(null, Array(5)).flatMap((_, index) => {
            if (index === 0) return pageNumber
            const newPageNumber = index + pageNumber
            if (newPageNumber > numberOfPages) return []
            return newPageNumber
        })
    
        return newPageNumbers
    }

    const pageNumbers = paginationHandler(pageNumber, numberOfPages)

    if (isNaN(numberOfPages) | numberOfPages === 0) return <></>

    return (
        <div className='flex flex-wrap my-16 mx-2 justify-center'>
            {(!(pageNumber === 1)) ? 
            <>
                <Link href={`${filters ? `/1/${filters}` : '/1'}`}>
                    <p className='text-[#5C16C5] hover:text-[#D18000] cursor-pointer font-bold p-2'>Primeira</p>
                </Link>
                <Link href={`${filters ? `/${pageNumber-1}/${filters}` : `/${pageNumber-1}`}`}>
                    <h1 className='text-[#5C16C5] hover:text-[#D18000] font-bold cursor-pointer p-2'>{`<`}</h1>
                </Link>
            </> : <></>}
            {pageNumbers.map(pageNum => {
                if (pageNum === pageNumber) return (
                    <Link key={pageNum} href={`${filters ? `/${pageNum}/${filters}` : `/${pageNum}`}`}>
                        <h1 className='text-[#D18000] cursor-pointer font-bold p-2'>{pageNum}</h1>
                    </Link>
                )
                if (pageNum === pageNumber+3 | pageNum === pageNumber+4) return (
                    <Link key={pageNum} href={`${filters ? `/${pageNum}/${filters}` : `/${pageNum}`}`}>
                        <h1 className='text-[#5C16C5] hover:text-[#D18000] hidden sm:block cursor-pointer font-bold p-2'>{pageNum}</h1>
                    </Link>
                )
                return (
                    <Link key={pageNum} href={`${filters ? `/${pageNum}/${filters}` : `/${pageNum}`}`}>
                        <h1 className='text-[#5C16C5] hover:text-[#D18000] font-bold cursor-pointer p-2'>{pageNum}</h1>
                    </Link>
                )
            })}
            {pageNumber !== numberOfPages ? 
            <>
                <Link href={`${filters ? `/${pageNumber+1}/${filters}` : `/${pageNumber+1}`}`}>
                    <h1 className='text-[#5C16C5] hover:text-[#D18000] font-bold cursor-pointer p-2'>{`>`}</h1>
                </Link>
                <Link href={`${filters ? `/${numberOfPages}/${filters}` : `/${numberOfPages}`}`}>
                    <p className='text-[#5C16C5] hover:text-[#D18000] cursor-pointer font-bold p-2'>Última</p>
                </Link>
            </> : <></>}
        </div>
    )
}