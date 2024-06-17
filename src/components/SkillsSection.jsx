import React from 'react'

export default function SkillsSection() {
    return (
        <section id="skills" className="w-full p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">What I Know</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML5" className="w-16 h-16" />
                    <p>HTML5</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS3" className="w-16 h-16" />
                    <p>CSS3</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="JavaScript" className="w-16 h-16" />
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/react.svg" alt="React" className="w-16 h-16" />
                    <p>React Js</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="Bootstrap" className="w-16 h-16" />
                    <p>Bootstrap</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" alt="Tailwind" className="w-16 h-16" />
                    <p>Tailwind</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png" alt="Flowbite UI" className="w-16 h-16" />
                    <p>Flowbite UI</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeksyLCg8_a1aWg_J3E9E9_NZAGL5HSHoXA&s" alt="Shards UI" className="w-16 h-16" />
                    <p>Shards UI</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/ant-design.svg" alt="Ant Design" className="w-16 h-16" />
                    <p>Ant Design</p>
                </div>
                {/* <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/mysql.svg" alt="MySQL" className="w-16 h-16" />
                    <p>MySQL</p>
                </div> */}
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/mongodb.svg" alt="MongoDB" className="w-16 h-16" />
                    <p>MongoDB</p>
                </div>

                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/visual-studio-code.svg" alt="Visual Studio Code" className="w-16 h-16" />
                    <p>Visual Studio Code</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="https://cdn.svgporn.com/logos/git-icon.svg" alt="Git & GitHub" className="w-16 h-16" />
                    <p>Git & GitHub</p>
                </div>
            </div>
        </section>)
}
