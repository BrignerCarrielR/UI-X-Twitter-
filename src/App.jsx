import React from 'react'
import Aside from './components/Aside'
import Section from './components/Section'
import Nav from './components/Nav'
export default function App() {
  return (
    <div className='container flex justify-start  text-gray-200 xl:justify-between'>

      <nav className="text-white w-auto nav_dis_movil xl:w-1/5 overflow-y-scroll h-screen">
        <Nav />
      </nav>

      <section className="text-white  w-full xl:w-2/4 overflow-y-scroll h-screen">
        <Section />
      </section>

      <aside className="text-white w-30por p-2 hidden lg:block  overflow-y-scroll h-screen">
        <Aside />
      </aside>

    </div>
  )
}


