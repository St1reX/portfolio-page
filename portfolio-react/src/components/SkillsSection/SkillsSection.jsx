import SkillsCarousel from './SkillsCarousel/SkillsCarousel';

export default function SkillsSection() {
  const carouselItems = [
    { fileName: 'php-original.svg', alt: 'PHP Logotype' },
    { fileName: 'mariadb-original-wordmark.svg', alt: 'MariaDB Logotype' },
    { fileName: 'bootstrap-original-wordmark.svg', alt: 'Bootstrap Logotype' },
    { fileName: 'cplusplus-original.svg', alt: 'C++ Logotype' },
    { fileName: 'csharp-original.svg', alt: 'C# Logotype' },
    { fileName: 'dot-net-plain-wordmark.svg', alt: '.NET Logotype' },
    { fileName: 'html5-original.svg', alt: 'HTML5 Logotype' },
    { fileName: 'javascript-plain.svg', alt: 'JavaScript Logotype' },
    { fileName: 'jquery-plain-wordmark.svg', alt: 'jQuery Logotype' },
    { fileName: 'nodejs-plain-wordmark.svg', alt: 'Node.js Logotype' },
    { fileName: 'react-original-wordmark.svg', alt: 'React Logotype' },
    { fileName: 'sass-original.svg', alt: 'Sass Logotype' },
    {
      fileName: 'tailwindcss-original-wordmark.svg',
      alt: 'Tailwind CSS Logotype',
    },
    { fileName: 'typescript-plain.svg', alt: 'TypeScript Logotype' },
    { fileName: 'vitejs-original.svg', alt: 'Vite.js Logotype' },
  ];

  const pathCore = './assets/skillsCarouselItems/';

  return (
    <>
      <div className="group w-full bg-zinc-800 flex justify-between px-[15%] py-10 relative">
        <div className="absolute -top-40" id="Skills"></div>
        <div className="flex flex-col max-w-[50%] min-h-[40vh] min-w-[320px] mt-10">
          <h2 className="w-fit text-4xl text-white font-bold mb-6 relative">
            #Skills
            <span className="absolute left-0 bottom-0 h-1 bg-main-green w-0 group-hover:w-full transition-all duration-500"></span>
          </h2>
          <p>
            Proficient in front-end and back-end web development, with strong
            skills in <span className="text-main-green">HTML</span>,
            <span className="text-main-green"> CSS</span>,
            <span className="text-main-green"> Tailwind CSS</span>,
            <span className="text-main-green"> PHP</span>,
            <span className="text-main-green"> JavaScript</span> and much more.
            Experienced with <span className="text-main-green">jQuery</span>,
            <span className="text-main-green"> TypeScript</span>, and
            <span className="text-main-green"> Bootstrap</span>, alongside
            <span className="text-main-green"> SCSS</span> for styling.
            Currently expanding my expertise in modern frameworks like
            <span className="text-main-green"> React</span>,
            <span className="text-main-green"> Node.js</span>,
            <span className="text-main-green"> ASP.NET</span>.
          </p>
        </div>
        <SkillsCarousel imgArray={carouselItems} pathCore={pathCore} />
      </div>
    </>
  );
}
