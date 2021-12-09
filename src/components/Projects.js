import Project from "./Project"

const projects = [
  {
    id: "Treeline",
    href: "/",
    date: "Feb 2021 🌲",
    position: "Developer",
    desc: "Creating a user-friendly forum allowing teachers to exchange" 
          + " resources, ideas, and questions.",
    stack: []
  },
  {
    id: "Epic Gamer Moments (StormHacks 2021)",
    href: "https://epicgamermoments.online",
    date: "Feb 2021 🎮",
    position: "Developer",
    desc: "Designed a web page allowing users to connect through sharing videos"
          + " of gaming highlights. 🏆 Won Community Choice Award.",
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "FindFreeSpace (nwHacks 2021)",
    href: "https://findfree.space",
    date: "Jan 2021 🏢",
    position: "Developer",
    desc: "Used AI and security camera footage to detect the occupancy within a"
          + " room by identifying upper bodies and sending the body count to a"
          + " database.",
    stack: ["Python", "OpenCV", "MongoDB"]
  },
]

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
