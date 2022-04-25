import Stack from "./Stack";
import { useSpring, animated } from "react-spring";

const Project = ({ project }) => {
  const fadeUp = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(100%)" },
  });

  return (
    <animated.div style={fadeUp} className="projectentry">
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
    </animated.div>
  );
};

export default Project;
