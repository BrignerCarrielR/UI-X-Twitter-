import React from 'react'

export default function Carta({ tituloSesion, contenido }) {

    return (

        <div className='border-1 border-gray-300 border-opacity-20 space-y-3 w-full  p-4 rounded-2xl'>
            <b className='text-2xl'>{tituloSesion}</b>
            <div className='space-y-3'>
                {contenido}
            </div>

        </div>

    )
}
