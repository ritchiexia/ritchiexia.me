import Stack from "./Stack"

const Project = ({ project }) => {
  return (
    <div>
      <br />
      <a className="projectid" href={project.href}>{project.id}</a>
      <p>{project.date}</p>
      <p className="bold">{project.position}</p>
      <p>{project.desc}</p>
      <div className="stack">
        {project.stack.map((s) => (<Stack name={s} />))}
      </div>
    </div>
  )
}

export default Project
