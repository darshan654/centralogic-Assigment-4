import React from 'react'
import { useTheme } from 'next-themes'

export default function EducationSection() {
    const { theme } = useTheme();

    const isDarkMode = theme === 'dark';
    //for dark mode on devises

    return (
        <section id="education" className="w-full p-8">
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Education Quality</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 shadow-lg rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Master of Computer Applications (MCA)</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>JSPM Rajarshi Shahu College Of Engineering 2024</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Score: 80 %</p>
                </div>



                
                <div className={`p-4 shadow-lg rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Bachelor of Science (B.Sc.) 2022</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Indira College of Commerce and Science</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Score: 86.95 %</p>
                </div>
                <div className={`p-4 shadow-lg rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Higher Secondary Certificate (HSC) 2019</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Kendriya Vidyalaya</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Score: 66.80 %</p>
                </div>
                <div className={`p-4 shadow-lg rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Secondary School Certificate (SSC) 2017</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Kendriya Vidyalaya</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Score: 81.40 %</p>
                </div>
            </div>
        </section>
    );
}
