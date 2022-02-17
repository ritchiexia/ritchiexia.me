import Stack from "./Stack";

const Project = ({ project }) => {
  return (
    <div>
      <a className="projectid" href={project.href}>
        {project.id}
      </a>
      <p>{project.date}</p>
      <b>{project.position}</b>
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
