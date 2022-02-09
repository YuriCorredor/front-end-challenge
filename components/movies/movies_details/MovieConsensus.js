import { useState, useEffect } from 'react'

export default function MovieConsensus({ score }) {

    const [color, setColor] = useState('#14FF00')

    useEffect(() => {
        if (score >= 7.0) setColor('#14FF00')
        if (score < 7.0) setColor('#d0d340')
        if (score <= 3.0) setColor('#f21f1f')
    }, [score])
    
    const progress = {
        background: `conic-gradient(${color}  ${score * 10 * 3.6}deg, #5C16C5 ${score * 10 * 3.6}deg)`
    }

    return (
        <div className='flex my-2'>
            <div style={progress} className={`grid place-items-center relative w-[60px] h-[60px] rounded-full bg-[#14FF00] before:absolute before:content-[""] before:h-[84%] before:w-[84%] before:bg-[#5C16C5] before:rounded-full`}>
                <h1 style={{color: color}} className='relative font-bold'>{score * 10}%</h1>
            </div>
            <h1 className='self-center px-6 max-w-[150px] text-white font-roboto'>Avaliação dos usuários</h1>
        </div>
    )
}