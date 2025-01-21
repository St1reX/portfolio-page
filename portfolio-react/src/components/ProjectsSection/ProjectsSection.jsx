import ProjectContainer from './ProjectContainer/ProjectContainer';
import projectsData from './ProjectsData/ProjectsData';

export default function ProjectsSection() {
  const pathCore = './assets/projectsImages/';

  return (
    <div className="py-20 relative">
      <div className="absolute -top-40" id="Projects"></div>
      <div className="flex justify-center">
        <h2 className="w-fit text-4xl text-white font-bold mb-6 relative">
          #Projects
        </h2>
      </div>

      <div className="flex justify-center align-middle">
        {projectsData.map((projectData) => (
          <ProjectContainer
            key={projectData.photoData.name}
            cardTitle={projectData.title}
            cardDescription={projectData.description}
            redirectionLink={projectData.redirection}
            imgData={projectData.photoData}
            pathCore={pathCore}
          />
        ))}
      </div>
    </div>
  );
}
