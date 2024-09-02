import React from 'react'
import CartaSection from './section/CartaSection'
import Posts from './section/Posts'
import NuevoPost from './section/NuevoPost'
import HeaderSection from './section/HeaderSection'
export default function Section() {
    return (
        <div className='border-x border-gray-300 border-opacity-20 mr-10'>
            {/* opciones de visualización(Para ti | Siguiendo) */}
            <CartaSection
                contenidoSection={
                    <HeaderSection />
                }
            />

            {/* Que estas pensando? */}
            <CartaSection
                contenidoSection={
                    <NuevoPost />
                }
            />

            {/* Publicaciones Posts? */}
            <CartaSection
                contenidoSection={
                    <Posts
                        imagenPerfil="https://th.bing.com/th/id/OIP.kVyKd-LAZFqT7oeXwZWWAQHaE5?rs=1&pid=ImgDetMain"
                        nombreUsuario="Ed Maverick"
                        descripcionPost="Hola, saludos"
                        imagenPost="https://th.bing.com/th/id/OIP.kVyKd-LAZFqT7oeXwZWWAQHaE5?rs=1&pid=ImgDetMain"
                        reacciones={{ comentar: 5, respostear: 23, meGusta: 89, ver: 200 }}
                    />
                }
            />
            <CartaSection
                contenidoSection={
                    <Posts
                        imagenPerfil="https://th.bing.com/th/id/R.b39e60a713dbbc0685c9422d7180dc31?rik=4TPsO%2b1sLSsv5w&pid=ImgRaw&r=0"
                        nombreUsuario="FC Barcelona"
                        descripcionPost="Mas que un Club"
                        imagenPost="https://th.bing.com/th/id/R.b39e60a713dbbc0685c9422d7180dc31?rik=4TPsO%2b1sLSsv5w&pid=ImgRaw&r=0"
                        reacciones={{ comentar: 1200, respostear: 130, meGusta: 1281, ver: 3240 }}
                    />
                }
            />
            <CartaSection
                contenidoSection={
                    <Posts
                        imagenPerfil="https://www.unemi.edu.ec/wp-content/uploads/2023/02/AVATARUNEMI22-768x768.png"
                        nombreUsuario="UNEMI"
                        descripcionPost="La Universidad en línea del Ecuador"
                        imagenPost="https://th.bing.com/th/id/OIP.5CbmZhD97TfxNVeaJR00WwHaE8?rs=1&pid=ImgDetMain"
                        reacciones={{ comentar: 0, respostear: 0, meGusta: 0, ver: 0 }}
                    />
                }
            />
        </div>

    )
}
