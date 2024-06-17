import React from 'react'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center w-full">
          <div className="text-2xl font-bold text-white">Portfolio</div>
          <div className="flex space-x-4">
            <a href="#home" className="hover:text-blue-500 hover:underline">Home</a>
            <a href="#education" className="hover:text-blue-500 hover:underline">Education</a>
            <a href="#skills" className="hover:text-blue-500 hover:underline">Tech Skills</a>
            {/* <a href="#projects" className="hover:text-blue-500 hover:underline">Projects</a> */}
            <a href="#contact" className="hover:text-blue-500 hover:underline">Contact</a>
          </div>
        </nav>
      </header>
  )
}
