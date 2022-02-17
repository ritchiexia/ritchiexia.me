import Project from "./Project";

const projects = [
  {
    id: "Treeline",
    href: "/",
    date: "Feb 2021 🌲",
    position: "Developer",
    desc:
      "Creating a user-friendly forum allowing teachers to exchange" +
      " resources, ideas, and questions.",
    stack: [],
  },
  {
    id: "BookCards",
    href: "https://github.com/ritchiexia/book-recommender",
    date: "Mar - May 2021 📚",
    position: "Developer",
    desc:
      "Developed a dating app-style book recommender powered by machine " +
      "learning in a group of 4. Matches new users with existing users " +
      "that have similar book tastes, then continues to adapt using " +
      "reinforcement learning based on swipe activity.",
    stack: ["Python (ML + API)", "React", "MongoDB"],
  },
  {
    id: "Epic Gamer Moments (StormHacks 2021)",
    href: "https://epicgamermoments.online",
    date: "Feb 2021 🎮",
    position: "Developer",
    desc:
      "Designed a web page allowing users to connect through sharing videos" +
      " of gaming highlights. 🏆 Won Community Choice Award.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "FindFreeSpace (nwHacks 2021)",
    href: "https://findfree.space",
    date: "Jan 2021 🏢",
    position: "Developer",
    desc:
      "Used AI and security camera footage to detect the occupancy within a" +
      " room by identifying upper bodies and sending the body count to a" +
      " database.",
    stack: ["Python", "OpenCV", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <div className="projectcontainer">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
