import React, { useState } from 'react'
export default function ListaSeguir({ urlImagen, usuario, descripcion, seguir }) {
    const [loSigue, setLoSigue] = useState(seguir)
    const textLoSigue = loSigue ? 'Siguiendo' : 'Seguir'
    const claseBoton = loSigue
        ? 'flex items-center justify-center  px-4 p-2 bg-black border-2 opacity-2 text-1xl text-white font-bold rounded-3xl'
        : 'flex items-center justify-center  px-4 p-2 bg-gray-200 text-1xl text-black font-bold rounded-3xl'
    const ModificarLoSigue = () => {
        setLoSigue(!loSigue)
    }
    return (
        <div className="flex items-center justify-between  space-x-3">
            <div className="flex space-x-3">
                <img className='h-12 w-12 rounded-full' src={urlImagen} alt="" />
                <div className='flex flex-col justify-center'>
                    <h5 className="text-lg fw-bold flex items-center ">
                        {usuario}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                        </svg>
                    </h5>
                    <p className=' opacity-25'>@{descripcion}</p>
                </div>
            </div>
            <button className={claseBoton} onClick={ModificarLoSigue}>
                {textLoSigue}
            </button>
        </div>
    )
}
