import React from 'react'
import Carta from './aside/carta'
import ListaSeguir from './aside/ListaSeguir'
import ListaTendencias from './aside/ListaTendencias'
export default function Aside() {
    return (
        <>
            <div className='flex flex-col space-y-3 justify-center items-center'>
                <div class="relative rounded-md shadow-sm w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="h-5 w-5 text-white opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input type="text" class="block pl-10 pr-3 py-2 bg-gray-600 opacity-20 rounded-full w-full  placeholder-white focus:outline-none focus:shadow-outline-blue" placeholder="Buscar" />
                </div>
                {/* Suscríbete a Premium */}
                <Carta
                    tituloSesion="Suscríbete a Premium "
                    contenido="Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios."
                />

                {/* Tendencias para ti */}
                <Carta
                    tituloSesion="Tendencias para ti"
                    contenido={
                        <>
                            <ListaTendencias
                                lugar="Tendencia en Ecuador"
                                nombre="#ViruaelaDelMono"
                                nroPosts="50.6 mil posts"
                            />
                            <ListaTendencias
                                lugar="Deportes . Tendencia"
                                nombre="Piero"
                                nroPosts="3.633 posts"
                            />
                            <ListaTendencias
                                lugar="Tendencia en Ecuador"
                                nombre="Sebastían Beccacece"
                            />
                            <ListaTendencias
                                lugar="Deportes . Tendencia"
                                nombre="Fantasy"
                                nroPosts="132 mil posts"
                            />
                        </>
                    } />

                {/* A quién seguir */}
                <Carta
                    tituloSesion="A quién seguir"
                    contenido={
                        <>
                            <ListaSeguir
                                usuario="Williams JR"
                                descripcion="williamsjr"
                                seguir={true}
                                urlImagen="https://pbs.twimg.com/profile_images/1814526570360360960/KxuK-XCP_400x400.jpg"
                            />
                            <ListaSeguir
                                usuario="Gerard Romero"
                                descripcion="gerardromero"
                                seguir={false}
                                urlImagen="https://pbs.twimg.com/profile_images/1619917677509615616/RvVUsd66_400x400.jpg"
                            />
                            <ListaSeguir
                                usuario="Nicolas Maduro"
                                descripcion="NicolasMaduro"
                                seguir={false}
                                urlImagen="https://pbs.twimg.com/profile_images/1166560186468896768/0gSado0h_400x400.jpg"
                            />
                        </>
                    } />
            </div>
        </>
    )
}