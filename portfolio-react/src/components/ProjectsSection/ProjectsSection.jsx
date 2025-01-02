import ProjectContainer from './ProjectContainer/ProjectContainer';
import projectsData from './ProjectsData/ProjectsData';

export default function ProjectsSection() {
  const optionalStyles = ['justify-start', 'justify-center', 'justify-end'];
  const pathCore = './assets/projectsImages/';

  return (
    <div className="w-full py-20 px-20 flex flex-col" id="Projects">
      {projectsData.map((projectData, index) => (
        <ProjectContainer
          key={projectData.photoData.name}
          cardTitle={projectData.title}
          cardDescription={projectData.description}
          redirectionLink={projectData.redirection}
          imgData={projectData.photoData}
          pathCore={pathCore}
          optionalStyle={optionalStyles[index % optionalStyles.length]}
        />
      ))}
    </div>
  );
}
