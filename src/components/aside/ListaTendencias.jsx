import React from 'react'

export default function ListaTendencias({ lugar, nombre, nroPosts }) {
    return (
        <div className="flex justify-between space-x-5">
            <div className='flex flex-col justify-center'>
                <p className='opacity-25 text-sm'>{lugar}</p>
                <h5 className="text-lg fw-bold">{nombre}</h5>
                <p className='opacity-25 text-sm'>{nroPosts}</p>
            </div>
            <a href=""> <svg class="h-5 w-5 text-zinc-500" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="5" cy="12" r="1" />  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" /></svg></a>
        </div>
    )
}   
