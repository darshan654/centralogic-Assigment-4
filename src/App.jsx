import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center w-full">
          <div className="text-2xl font-bold text-white">Portfolio</div>
          <div className="flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#skills" className="hover:underline">Tech Skills</a>
            {/* <a href="#projects" className="hover:underline">Projects</a> */}
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      {/* Welcome Section */}
      <section id="home" className="w-full p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-white">WELCOME TO MY WORLD</h1>
          <p className="text-xl text-white">Hi, I'm Sudarshan Thakare, a ReactJs Developer.<br />
            Looking to work in an organization that can provide a variety of opportunities that allow me to expand my skills and knowledge while working towards achieving the organizational goals.</p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
        <img src="your-photo.jpg" alt="Sudarshan Thakare" className="rounded-md w-32 md:w-48 mx-auto mb-4" />

        </div>
      </section>

      {/* Find Me Section */}
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

      {/* Education Section */}
      <section id="education" className="w-full p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Education Quality</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-Black">Master of Computer Applications (MCA)</h3>
            <p>JSPM Rajarshi Shahu College Of Engineering</p>
            <p>Score: 80 %</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-Black">Bachelor of Science (B.Sc.)</h3>
            
            <p>Indira College of Commerce and Science</p>
            <p>Score: 86.95%</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-Black">Higher Secondary Certificate (HSC)</h3>
            
            <p>Kendriya Vidyalaya</p>
            <p>Score: 66.80</p>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-Black">Secondary School Certificate (SSC)</h3>
            
            <p>Kendriya Vidyalaya</p>
            <p>Score: 81.40</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="w-full p-8">
  <h2 className="text-2xl font-bold mb-4 text-white">What I Know</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/c.svg" alt="C" className="w-16 h-16" />
      <p>C</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/c-plusplus.svg" alt="C++" className="w-16 h-16" />
      <p>C++</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/python.svg" alt="Python" className="w-16 h-16" />
      <p>Python</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/java.svg" alt="Java" className="w-16 h-16" />
      <p>Java</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="JavaScript" className="w-16 h-16" />
      <p>JavaScript</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML5" className="w-16 h-16" />
      <p>HTML5</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS3" className="w-16 h-16" />
      <p>CSS3</p>
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
    
    <div className="flex flex-col items-center">
      <img src="https://i.ibb.co/k1r2d8W/Untitled.png" alt="Chakra UI" className="w-16 h-16" />
      <p>Chakra UI</p>
    </div>
    <div className="flex flex-col items-center">
      <img src="https://cdn.svgporn.com/logos/mysql.svg" alt="MySQL" className="w-16 h-16" />
      <p>MySQL</p>
    </div>
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
    {/* Add more skills as needed */}
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="w-full p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8 order-2 md:order-1">
        <img src="preview.png" alt="Sudarshan Thakare" className="rounded-md w-64 md:w-62 mx-auto mb-4" />


          <h2 className="text-2xl font-bold text-white">Sudarshan Thakare</h2>
          <p className="text-white">Frontend Developer</p>
          <p className="text-white">Excited to connect and discuss how my skills can contribute to your team. Your message is valued and I look forward to the opportunity!</p>
          <p className="text-white">Email: your-email@example.com</p>
          <p className="text-white">Address: Your Address</p>
          <p className="text-white">Phone: Your Phone Number</p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <form action="submit_form.php" method="post" className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact With Me</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md">Send</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
