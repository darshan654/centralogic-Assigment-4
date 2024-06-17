import React from 'react'
import previewImage2 from '/public/assets/profile2.png';

export default function ContactSection() {
    return (
        <section id="contact" className="w-full p-4 flex flex-col md:flex-row items-stretch ">
            <div className="md:w-1/2 p-4 order-2 md:order-1 flex flex-col justify-between">
                <div className="text-center mb-4">
                    <img src={previewImage2} alt="Sudarshan Thakare" className="rounded-md w-62 md:w-60 mx-auto mb-2" />
                    <h2 className="text-2xl font-extrabold text-white mb-2">Sudarshan Thakare</h2>
                    <p className="text-lg text-blue-300 mb-2">Frontend Developer</p>
                </div>
                <p className="text-base text-gray-200 mb-4 leading-relaxed">
                    Excited to connect and discuss how my skills can contribute to your team. Your message is valued, and I look forward to the opportunity!
                </p>
                <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                    <p className="text-base text-white mb-2"><span className="font-semibold">Email:</span> <a href="mailto:sudthakare73@gmail.com" className="text-blue-300 hover:underline">sudthakare73@gmail.com</a></p>
                    <p className="text-base text-white mb-2"><span className="font-semibold">Address:</span> Pune</p>
                    <p className="text-base text-white"><span className="font-semibold">Phone:</span> <a href="tel:+917499020601" className="text-blue-300 hover:underline">7499020601</a></p>
                </div>
            </div>

            {/* Form */}
            <div className="md:w-1/2 p-4 order-2 md:order-1">
                <form action="https://formspree.io/f/meqywbwb" method="post" className="bg-white p-6 shadow-lg rounded-lg h-full flex flex-col">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Contact With Me</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 block w-full shadow-md sm:text-sm border-2 border-gray-300 rounded-md bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 block w-full shadow-md sm:text-sm border-2 border-gray-300 rounded-md bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 p-2 block w-full shadow-md sm:text-sm border-2 border-gray-300 rounded-md bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 p-2 block w-full shadow-md sm:text-sm border-2 border-gray-300 rounded-md bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-auto"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>)
}
