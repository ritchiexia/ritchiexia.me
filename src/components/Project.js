import Stack from "./Stack";

const Project = ({ project }) => {
  return (
    <div className="projectentry">
      <a className="projectid" href={project.href}>
        {project.id}
      </a>
      <p>{project.date}</p>
      <p>{project.desc}</p>
      <div className="stack">
        {project.stack.map((s) => (
          <Stack name={s} key={s} />
        ))}
      </div>
    </div>
  );
};

export default Project;
