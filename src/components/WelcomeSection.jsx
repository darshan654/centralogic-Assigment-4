import React from 'react';
import useTypingEffect from './useTypingEffect';
import previewImage1 from '/public/assets/profile1.jpg';


export default function WelcomeSection() {

     //togel words
  const words = ['a ReactJs Developer.', 'a Frontend Developer.'];
  const typingText = useTypingEffect(words, 150);
//   const  typingText = 

  return (
    <section id="home" className="w-full p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-white">WELCOME TO MY WORLD</h1>
          <p className="text-xl text-white">Hi, I'm Sudarshan Thakare, <span>{typingText}</span></p>
          <p className="text-xl text-white">
            Looking to work in an organization that can provide a variety of opportunities that allow me to enhance my skills and knowledge while working towards achieving the organizational goals.</p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img src={previewImage1} alt="Sudarshan Thakare" className="rounded-md w-32 md:w-48 mx-auto mb-4" />

        </div>
      </section>
  )
}
