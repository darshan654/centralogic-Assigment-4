import React from 'react';

const SkillsSection = () => {
    return (
        <section id="skills" className="w-full p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">What I Know</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/html-5.svg" skillName="HTML5" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/css-3.svg" skillName="CSS3" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/javascript.svg" skillName="JavaScript" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/react.svg" skillName="React Js" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/bootstrap.svg" skillName="Bootstrap" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" skillName="Tailwind" />
                <SkillCard imageSrc="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png" skillName="Flowbite UI" />
                <SkillCard imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeksyLCg8_a1aWg_J3E9E9_NZAGL5HSHoXA&s" skillName="Shards UI" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/ant-design.svg" skillName="Ant Design" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/mongodb.svg" skillName="MongoDB" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/visual-studio-code.svg" skillName="Visual Studio Code" />
                <SkillCard imageSrc="https://cdn.svgporn.com/logos/git-icon.svg" skillName="Git & GitHub" />
            </div>
        </section>
    );
};

const SkillCard = ({ imageSrc, skillName }) => {
    return (
        <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={imageSrc} alt={skillName} className="w-16 h-16 mb-2 rounded-lg shadow-lg hover:shadow-xl" />
            <p className="text-sm text-gray-300">{skillName}</p>
        </div>
    );
};

export default SkillsSection;
