import ProjectContainer from './ProjectContainer/ProjectContainer';
import projectsData from './ProjectsData/ProjectsData';

export default function ProjectsSection() {
  const pathCore = './assets/projectsImages/';

  return (
    <div className="py-20" id="Projects">
      <div className="flex justify-center">
        <h2 className="w-fit text-4xl text-white font-bold mb-6 relative">
          My Projects
        </h2>
      </div>

      <div className="flex justify-center align-middle">
        {projectsData.map((projectData, index) => (
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
