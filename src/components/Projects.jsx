import SectionTitle from "../components/SectionTitle";
import { projects } from "../data";
import Project from "./Project";

const Projects = () => {
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
