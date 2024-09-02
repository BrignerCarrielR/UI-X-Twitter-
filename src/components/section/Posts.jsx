import React, { useState, useEffect } from 'react'

export default function Posts({ imagenPerfil, nombreUsuario, descripcionPost, imagenPost, reacciones }) {
    const [respostear, setRespostear] = useState(false)
    const [meGusta, setMeGusta] = useState(false)
    const [valorComentar, setValorComentar] = useState(reacciones.comentar)
    const [valorRespostear, setValorRespostear] = useState(reacciones.respostear)
    const [valorMeGusta, setValorMeGusta] = useState(reacciones.meGusta)
    const [valorVer, setValorVer] = useState(reacciones.ver)


    const colorMeGusta = meGusta ? 'flex text-red-600' : 'flex text-zinc-500 hover:text-red-600';
    const colorRespostear = respostear ? 'flex  text-green-600' : 'flex  text-zinc-500  hover:text-green-600';

    const sumarMeGusta = () => {
        setMeGusta(!meGusta)
        if (meGusta == false) {
            setValorMeGusta(valorMeGusta + 1)
        } else {
            setValorMeGusta(valorMeGusta - 1)
        }
    }
    const sumarRepostear = () => {
        setRespostear(!respostear)
        if (respostear == false) {
            setValorRespostear(valorRespostear + 1)
        } else {
            setValorRespostear(valorRespostear - 1)
        }
    }

    return (
        <>
            <div className='flex justify-between space-x-5'>
                <div className="flex space-x-3">
                    <img className='h-12 w-12 rounded-full' alt="" src={imagenPerfil} />
                    <div className='flex flex-col'>
                        <div className='flex items-center  space-x-2'>
                            <h5 className="text-sm xl:text-lg fw-bold">{nombreUsuario}</h5>
                            <p className='text-sm xl:text-lg opacity-25'>@{nombreUsuario}</p>
                            <p className='text-sm xl:text-lg opacity-25'>-</p>
                            <p className='text-sm xl:text-lg opacity-25'>2h</p>
                        </div>
                        <p className='max-w-full opacity-70'>{descripcionPost}</p>
                        <img className='max-h-full  rounded-2xl my-2' src={imagenPost} alt="" />
                    </div>
                </div>
                <a href=""> <svg class="h-5 w-5 text-zinc-500" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="5" cy="12" r="1" />  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" /></svg></a>
            </div>
            <div className='flex justify-around mt-3  text-zinc-500'>

                <div className='flex hover:text-blue-700'>
                    <button >
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    </button>
                    {valorComentar}
                </div>

                <div className={colorRespostear}>
                    <button onClick={sumarRepostear}>
                        <svg className='size-6' width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />  <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3-3l3-3" /></svg>
                    </button>
                    {valorRespostear}
                </div>

                <div className={colorMeGusta}>
                    <button onClick={sumarMeGusta}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-6'>
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                    </button>
                    {valorMeGusta}
                </div>

                <div className='flex  hover:text-blue-800'>
                    <button>
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <line x1="18" y1="20" x2="18" y2="10" />  <line x1="12" y1="20" x2="12" y2="4" />  <line x1="6" y1="20" x2="6" y2="14" /></svg>
                    </button>
                    {valorVer}
                </div>

                <div className='flex'>
                    <button>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                    <button>
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />  <polyline points="16 6 12 2 8 6" />  <line x1="12" y1="2" x2="12" y2="15" /></svg>
                    </button>
                </div>
            </div>
        </>

    )
}

