import "./styles/App.scss";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg";
import Experience from "./components/Experience";
import { ExperienceList } from "./components/ExperienceList";

function App() {
  return (
    <div className="container">
      <div className="profile">
        <img className="profile__pic" src="/images/me.png" alt="Me!" />
        <div className="profile__right">
          <h2>Ritchie Xia</h2>
          <span className="profile__icon-list">
            <a href="https://github.com/ritchiexia">
              <GithubIcon className="profile__icon-item" />
            </a>
            <a href="https://www.linkedin.com/in/ritchiexia/">
              <LinkedInIcon className="profile__icon-item" />
            </a>
            <a href="https://twitter.com/ritchie_xia">
              <TwitterIcon className="profile__icon-item" />
            </a>
          </span>
        </div>
      </div>

      <div className="experiences">
        {ExperienceList.map((experience) => (
          <Experience experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default App;
