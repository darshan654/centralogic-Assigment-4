import React from 'react';

const ProjectSection = () => {
    return (
        <section id="projects" className="w-full py-20 border-b-[1px] border-b-black p-8">
            <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4 mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Live Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mx-auto max-w-7xl">
                <ProjectCard 
                    imageSrc="/assets/project/todolist.png" 
                    title="To-Do List" 
                    description="A project for managing tasks with a user-friendly interface."
                    netlifyLink="#"  // Replace with actual Netlify link when ready
                    githubLink="https://github.com/your-username/your-repo"  // Replace with actual GitHub link
                />

<ProjectCard 
                    imageSrc="/assets/project/todolist.png" 
                    title="To-Do List" 
                    description="A project for managing tasks with a user-friendly interface."
                    netlifyLink="#"  // Replace with actual Netlify link when ready
                    githubLink="https://github.com/your-username/your-repo"  // Replace with actual GitHub link
                />
                {/* Add more ProjectCard components for other projects */}
            </div>
        </section>
    );
};

const ProjectCard = ({ imageSrc, title, description, netlifyLink, githubLink }) => {
    return (
        <a href={netlifyLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out block">
            <img src={imageSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded" />
            <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
                <div className="flex justify-center mt-4">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                        <svg className="w-8 h-8 md:w-10 md:h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48l-.01-1.68c-2.782.6-3.37-1.34-3.37-1.34-.455-1.15-1.112-1.46-1.112-1.46-.91-.62.07-.61.07-.61 1.006.07 1.532 1.03 1.532 1.03.893 1.53 2.347 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.24-.25-4.588-1.12-4.588-5.01 0-1.11.4-2.01 1.03-2.72-.1-.25-.45-1.287.1-2.675 0 0 .85-.27 2.775 1.04.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.92-1.31 2.77-1.04 2.77-1.04.56 1.39.21 2.425.1 2.675.64.71 1.03 1.61 1.03 2.72 0 3.9-2.35 4.76-4.6 5.01.36.31.68.92.68 1.86l-.01 2.77c0 .26.18.57.69.47A10.013 10.013 0 0 0 22 12c0-5.52-4.48-10-10-10Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </a>
    );
};

export default ProjectSection;
