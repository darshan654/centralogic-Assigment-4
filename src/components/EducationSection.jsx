import React from 'react'

export default function EducationSection() {
    return (
        <section id="education" className="w-full p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Education Quality</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold text-Black">Master of Computer Applications (MCA)</h3>
                    <p>JSPM Rajarshi Shahu College Of Engineering 2024</p>
                    <p>Score: 80 %</p>
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold text-Black">Bachelor of Science (B.Sc.) 2022</h3>

                    <p>Indira College of Commerce and Science</p>
                    <p>Score: 86.95%</p>
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold text-Black">Higher Secondary Certificate (HSC) 2019</h3>

                    <p>Kendriya Vidyalaya</p>
                    <p>Score: 66.80</p>
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold text-Black">Secondary School Certificate (SSC) 2017</h3>

                    <p>Kendriya Vidyalaya</p>
                    <p>Score: 81.40</p>
                </div>
            </div>
        </section>)
}
