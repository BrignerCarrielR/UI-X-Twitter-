import React from 'react'

export default function ({ urlImagen, usuario, descripcion }) {
    return (
        <footer className='fixed bottom-0 pb-3  hidden sm:block   xl:bg-black'>
            <div className="flex items-center w-56 py-2 justify-between">
                <div className="flex  items-center space-x-3">
                    <img className='h-12 w-12 rounded-full' src={urlImagen} alt="" />
                    <div className='hidden xl:block'>
                        <h5 className="text-lg fw-bold  ">{usuario}</h5>
                        <p className=' opacity-25'>@{descripcion}</p>
                    </div>
                </div>
                <a className='hidden xl:block' href=""> <svg class="h-5 w-5 text-zinc-500" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="5" cy="12" r="1" />  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" /></svg></a>
            </div>
        </footer>
    )
}
