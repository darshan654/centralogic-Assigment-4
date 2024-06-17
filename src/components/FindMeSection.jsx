import React from 'react'

export default function FindMeSection() {
  return (
    <section className="w-full p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">FIND ME IN</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/sudarshanthakare/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="w-8" />
          </a>
          <a href="mailto:sudthakare73@example.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/color/48/000000/email.png" alt="Mail" className="w-8" />
          </a>
          <a href="https://github.com/darshan654" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.svgporn.com/logos/git-icon.svg" alt="GitHub" className="w-8" />
          </a>
        </div>
      </section>
  )
}
