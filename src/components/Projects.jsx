import SectionTitle from "../components/SectionTitle";
import Project from "./Project";
import useFetchProject from "./useFetchProject";

const Projects = () => {
  const { isLoading, projects } = useFetchProject();
  console.log(projects);
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations"></SectionTitle>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <Project key={project.id} {...project}></Project>;
        })}
      </div>
    </section>
  );
};
export default Projects;
